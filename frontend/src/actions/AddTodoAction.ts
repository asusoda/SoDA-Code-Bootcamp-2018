import { RequestSchema, ResponseSchema } from "../../../shared/schema/AddTodo";
import { Todo } from "../../../shared/schema/Todo";
import { baseApiUrl } from "../config";

// Given a description, asynchronously call our API to create a new Todo item,
// then return it.
const AddTodoAction = async (description: string) => {
  const requestBody: RequestSchema = {
    description
  };

  const response = await fetch(
    `${baseApiUrl}/add-todo`,
    {
      body: JSON.stringify(requestBody),
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      method: "POST",
      mode: "cors"
    }
  );

  const responseBody: ResponseSchema = await response.json();
  const newTodo: Todo = {
    checked: responseBody.checked,
    description: responseBody.description,
    id: responseBody.id
  };

  return newTodo;
};

export default AddTodoAction;
