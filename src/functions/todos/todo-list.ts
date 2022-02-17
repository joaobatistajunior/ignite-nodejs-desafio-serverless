import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "src/utils/dynamodbClient";

export const handler: APIGatewayProxyHandler = async (event) => {

    const { userid } = event.pathParameters;

    const response = await document.query({
        TableName: "todos",
        IndexName: "UserIdIndex",
        KeyConditionExpression: "user_id = :userid",
        ExpressionAttributeValues: {
            ":userid": userid
        }
    }).promise();

    const userTodos = response.Items;

    console.log(userTodos.length)


    return {
        statusCode: 201,
        body: JSON.stringify(userTodos)
    }
}