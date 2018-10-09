import * as express from "express";

// Our route handlers fulfill the business logic of our API endpoiunts.
import GetTodos from "./handlers/GetTodos";

// Create routes for each of our API endpoints; specify appropriate HTTP verb
// these routes accept.
const rootRouter = express.Router();
rootRouter.get("/get-todos", GetTodos);

export default rootRouter;
