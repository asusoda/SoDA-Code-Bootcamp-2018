import { RequestHandler } from "express";

import { RequestSchema, ResponseSchema } from "../../../shared/schema/AddTodo";
import { TodoModel } from "../DataLayer";

const AddTodoHandler: RequestHandler = async (request, response) => {
  const body: RequestSchema = request.body;
  const requestDescription = body.description;

  const model: any = await TodoModel.create({
    checked: false,
    description: requestDescription
  });

  const responseBody: ResponseSchema = {
    checked: model.get("checked"),
    description: model.get("description"),
    id: model.get("id")
  };

  response.status(201);
  response.json(responseBody);
};

export default AddTodoHandler;
