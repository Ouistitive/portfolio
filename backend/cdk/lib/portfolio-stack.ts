import * as apigw from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
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
      bundling: {
        minify: true,
        sourceMap: true,
      },
    });

    for (const name of TABLE_NAMES) {
      tables[name].grantReadData(handler);
    }

    const httpApi = new apigw.HttpApi(this, "PortfolioApi", {
      apiName: "Portfolio API",
      corsPreflight: {
        allowHeaders: ["Content-Type", "Authorization"],
        allowMethods: [
          apigw.CorsHttpMethod.GET,
          apigw.CorsHttpMethod.POST,
          apigw.CorsHttpMethod.PUT,
          apigw.CorsHttpMethod.DELETE,
        ],
        allowOrigins: ["*"],
      },
    });

    httpApi.addRoutes({
      path: "/{proxy+}",
      methods: [apigw.HttpMethod.GET],
      integration: new HttpLambdaIntegration(
        "PortfolioIntegration",
        handler,
      ),
    });

    new cdk.CfnOutput(this, "ApiUrl", {
      value: httpApi.apiEndpoint,
      description: "API Gateway endpoint URL",
    });
  }
}
