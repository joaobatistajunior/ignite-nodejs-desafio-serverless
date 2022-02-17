import { handlerPath } from "@libs/handler-resolver";

const todoCreate = {
    handler: `${handlerPath(__dirname)}/todo-create.handler`,
    events: [
        {
            http: {
                path: "todos/{userid}",
                method: "post",
                cors: true
            }
        }
    ]
}
const todoList = {
    handler: `${handlerPath(__dirname)}/todo-list.handler`,
    events: [
        {
            http: {
                path: "todos/{userid}",
                method: "get",
                cors: true
            }
        }
    ]
}

export {
    todoCreate, todoList
}