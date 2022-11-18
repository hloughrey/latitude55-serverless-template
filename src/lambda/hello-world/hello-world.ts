import { APIGatewayEvent } from 'aws-lambda';
import { response } from '@latitude55/libs';

export async function handler({ pathParameters }: APIGatewayEvent) {
  return response(200, { message: `Hello ${pathParameters?.name}` });
}
