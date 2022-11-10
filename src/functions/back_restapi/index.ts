import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export const handler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      statusCode: 200,
      body: 'GET back_restapi/',
    }
    return response
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    }
  }
}
