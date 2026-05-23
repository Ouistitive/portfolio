import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function getAllItems<T>(tableName: string): Promise<T[]> {
  const result = await docClient.send(new ScanCommand({ TableName: tableName }));
  return (result.Items ?? []) as T[];
}

export async function getItemById<T>(
  tableName: string,
  id: string,
): Promise<T | null> {
  const result = await docClient.send(
    new GetCommand({ TableName: tableName, Key: { id } }),
  );
  return (result.Item as T) ?? null;
}
