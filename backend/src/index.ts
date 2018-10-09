import * as bodyParser from "body-parser";
import * as express from "express";

import { initDataLayer } from "./DataLayer";
import rootRouter from "./Routes";

// Read environment variable for port, default to 8000 if undefined.
const port = process.env.PORT || 8000;

// Since we have to wait on an asynchronous action (data layer initialization),
// we must put all the app start-up logic in an async function.
const startApp = async () => {
  // Ensure that our database connection and our models have been initialized
  // before starting the express server.
  await initDataLayer();

  // Create our web server.
  const app = express();

  // Middleware automatically parses body from a JSON string into an object.
  app.use(bodyParser.json());

  // Middleware configures all responses to output CORS headers.
  app.use((_, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  // Configure the app to use our rootRouter for routing incoming API requests.
  // see rootRouter.js for the endpoints.
  app.use(rootRouter);

  console.log("App is listening on port", port);
  app.listen(port);
};

startApp();
