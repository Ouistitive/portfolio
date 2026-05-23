import type { APIGatewayProxyStructuredResultV2 } from "aws-lambda";

export function ok<T>(data: T, statusCode = 200): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  };
}

export function list<T>(data: T[]): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data, count: data.length }),
  };
}

export function notFound(entity = "Resource"): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode: 404,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ error: `${entity} not found`, statusCode: 404 }),
  };
}

export function serverError(error: unknown): APIGatewayProxyStructuredResultV2 {
  const message = error instanceof Error ? error.message : "Internal server error";
  return {
    statusCode: 500,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ error: message, statusCode: 500 }),
  };
}
