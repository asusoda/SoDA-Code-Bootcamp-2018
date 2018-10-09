import { RequestHandler } from "express";
import { RequestSchema, ResponseSchema } from "../../../shared/schema/ToggleChecked";
import { TodoModel } from "../DataLayer";

const ToggleCheckedHandler: RequestHandler = async (request, response) => {
  const body: RequestSchema = request.body;
  const { id } = body;
  const todo: any = await TodoModel.findById(id);
  let responseBody: ResponseSchema;

  if (todo === null) {
    response.status(404);
    responseBody = {
      succeeded: false
    };
    response.json(responseBody);
    return;
  }

  const wasChecked: boolean = todo.get("checked");
  await todo.update({
    checked: !wasChecked
  });

  response.status(200);
  responseBody = {
    succeeded: true
  };
  response.json(responseBody);
};

export default ToggleCheckedHandler;
