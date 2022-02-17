# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn dynamodb:install` to install dynamo DB locally
- Run `yarn dynamodb:start` to start dynamo DB locally
- Run `yarn dev` to test this service

### Locally

- url: http://localhost:3000/dev
- sending a `POST` request to `/todos/{user_id}` with a payload containing a string property named `title` and `deadline` will result in API Gateway returning a `201` HTTP created (no content).
- sending a `GET` request to `/todos/{user_id}` will result in API Gateway returning a `200` HTTP status code with a todos list of the `user_id`.


### Remotely

This project is not deploy in the AWS cloud.