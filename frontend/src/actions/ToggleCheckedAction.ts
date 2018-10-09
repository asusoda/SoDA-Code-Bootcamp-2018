import { RequestSchema, ResponseSchema } from "../../../shared/schema/ToggleChecked";
import { baseApiUrl } from "../config";

// Given an ID, make an API call to toggle whether a Todo item is checked,
// then return whether or not the change was successful. (API call can fail if
// the given ID does not exist in the database).
const ToggleCheckedAction = async (id: number) => {
  const requestBody: RequestSchema = {
    id
  };

  const response = await fetch(
    `${baseApiUrl}/toggle-checked`,
    {
      body: JSON.stringify(requestBody),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      mode: "cors"
    }
  );

  const responseBody: ResponseSchema = await response.json();
  return responseBody.succeeded;
};

export default ToggleCheckedAction;
