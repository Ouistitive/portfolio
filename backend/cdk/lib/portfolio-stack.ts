import * as apigw from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

const TABLE_NAMES = [
  "Projects",
  "Experiences",
  "Skills",
  "Schools",
  "Hobbies",
  "Learnings",
] as const;

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // --- DynamoDB ---
    const tables: Record<string, dynamodb.Table> = {};
    for (const name of TABLE_NAMES) {
      const table = new dynamodb.Table(this, `${name}Table`, {
        tableName: `Portfolio-${name}`,
        partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
        billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      });
      tables[name] = table;
    }

    // --- Lambda ---
    const handler = new NodejsFunction(this, "PortfolioHandler", {
      runtime: lambda.Runtime.NODEJS_22_X,
      entry: "src/handler.ts",
      handler: "handler",
      memorySize: 256,
      timeout: cdk.Duration.seconds(10),
      environment: Object.fromEntries(
        TABLE_NAMES.map((name) => [
          `${name.toUpperCase()}_TABLE`,
          tables[name].tableName,
        ]),
      ),
      bundling: { minify: true, sourceMap: true },
    });

    for (const name of TABLE_NAMES) {
      tables[name].grantReadData(handler);
    }

    // --- API Gateway ---
    const httpApi = new apigw.HttpApi(this, "PortfolioApi", {
      apiName: "Portfolio API",
      corsPreflight: {
        allowHeaders: ["Content-Type", "Authorization"],
        allowMethods: [apigw.CorsHttpMethod.GET],
        allowOrigins: ["*"],
      },
    });

    httpApi.addRoutes({
      path: "/{proxy+}",
      methods: [apigw.HttpMethod.GET],
      integration: new HttpLambdaIntegration("PortfolioIntegration", handler),
    });

    // --- S3 bucket (frontend) ---
    const bucket = new s3.Bucket(this, "FrontendBucket", {
      bucketName: `portfolio-frontend-${this.account}-${this.region}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    // --- CloudFront ---
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "OriginAccessIdentity",
    );
    bucket.grantRead(originAccessIdentity);

    const apiDomain = cdk.Fn.select(2, cdk.Fn.split("/", httpApi.apiEndpoint));

    const distribution = new cloudfront.CfnDistribution(this, "PortfolioDistribution", {
      distributionConfig: {
        enabled: true,
        comment: "Portfolio frontend + API",
        priceClass: "PriceClass_100", // Europe + North America

        origins: [
          {
            id: "S3Origin",
            domainName: bucket.bucketRegionalDomainName,
            s3OriginConfig: {
              originAccessIdentity: `origin-access-identity/cloudfront/${originAccessIdentity.originAccessIdentityId}`,
            },
          },
          {
            id: "ApiOrigin",
            domainName: apiDomain,
            customOriginConfig: {
              originProtocolPolicy: "https-only",
              originSslProtocols: ["TLSv1.2"],
            },
          },
        ],

        defaultCacheBehavior: {
          targetOriginId: "S3Origin",
          viewerProtocolPolicy: "redirect-to-https",
          allowedMethods: ["GET", "HEAD", "OPTIONS"],
          cachedMethods: ["GET", "HEAD"],
          forwardedValues: {
            queryString: true,
            cookies: { forward: "none" },
          },
          defaultTtl: 86400,
          maxTtl: 31536000,
          minTtl: 0,
          compress: true,
        },

        cacheBehaviors: [
          {
            pathPattern: "/api/*",
            targetOriginId: "ApiOrigin",
            viewerProtocolPolicy: "https-only",
            allowedMethods: ["GET", "HEAD", "OPTIONS"],
            cachedMethods: ["GET", "HEAD"],
            forwardedValues: {
              queryString: true,
              cookies: { forward: "all" },
              headers: ["Authorization", "Accept"],
            },
            defaultTtl: 0,
            maxTtl: 0,
            minTtl: 0,
          },
        ],

        aliases: ["steventea.com", "www.steventea.com"],

        viewerCertificate: {
          acmCertificateArn:
            "arn:aws:acm:us-east-1:568289071866:certificate/04fe1611-f0a8-466f-b15b-33806406e6fd",
          sslSupportMethod: "sni-only",
          minimumProtocolVersion: "TLSv1.2_2021",
        },

        defaultRootObject: "index.html",

        customErrorResponses: [
          {
            errorCode: 403,
            responseCode: 200,
            responsePagePath: "/index.html",
          },
          {
            errorCode: 404,
            responseCode: 200,
            responsePagePath: "/index.html",
          },
        ],
      },
    });

    // --- Outputs ---
    new cdk.CfnOutput(this, "ApiUrl", {
      value: httpApi.apiEndpoint,
      description: "API Gateway endpoint URL",
    });

    new cdk.CfnOutput(this, "BucketName", {
      value: bucket.bucketName,
      description: "Frontend bucket name (use for aws s3 sync)",
    });

    new cdk.CfnOutput(this, "CloudFrontUrl", {
      value: distribution.attrDomainName,
      description: "CloudFront distribution URL (for Cloudflare CNAME)",
    });
  }
}
