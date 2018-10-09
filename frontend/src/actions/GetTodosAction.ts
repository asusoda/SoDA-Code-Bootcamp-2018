import { ResponseSchema } from "../../../shared/schema/GetTodos";
import { Todo } from "../../../shared/schema/Todo";
import { baseApiUrl } from "../config";

// Call our API to request all Todo items stored in the database, then return
// them as Map<number, Todo>.
const GetTodosAction = async () => {
  const response = await fetch(
    `${baseApiUrl}/get-todos`,
    {
      cache: "no-cache",
      method: "GET",
      mode: "cors"
    }
  );

  const responseBody: ResponseSchema = await response.json();

  const todos = new Map<number, Todo>();
  for (const todo of responseBody.todos) {
    todos.set(todo.id, {
      checked: todo.checked,
      description: todo.description,
      id: todo.id
    });
  }

  return todos;
};

export default GetTodosAction;
