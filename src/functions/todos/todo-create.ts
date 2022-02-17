import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "src/utils/dynamodbClient";
import { v4 as uuidV4 } from "uuid";

interface ITodo {
    title: string;
    deadline: Date
}

export const handler: APIGatewayProxyHandler = async (event) => {

    const { userid: user_id } = event.pathParameters;
    const { title, deadline } = JSON.parse(event.body) as ITodo;

    await document.put({
        TableName: "todos",
        Item: {
            id: uuidV4(),
            user_id,
            title,
            deadline: new Date(deadline).getTime(),
            done: false
        }
    }).promise()


    return {
        statusCode: 201,
        body: ""
    }
}