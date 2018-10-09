import { RequestHandler } from "express";

import { ResponseSchema } from "../../../shared/schema/GetTodos";
import { Todo } from "../../../shared/schema/Todo";
import { TodoModel } from "../DataLayer";

const GetTodosHandler: RequestHandler = async (_, response) => {
  const allTodos: any[] = await TodoModel.all();
  const responseTodos: Todo[] = [];

  for (const todo of allTodos) {
    responseTodos.push({
      checked: todo.get("checked"),
      description: todo.get("description"),
      id: todo.get("id")
    });
  }

  const responseBody: ResponseSchema = {
    todos: responseTodos
  };

  response.status(200);
  response.json(responseBody);
};

export default GetTodosHandler;
