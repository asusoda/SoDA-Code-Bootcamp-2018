import * as bodyParser from "body-parser";
import * as express from "express";


// Read environment variable for port, default to 8000 if undefined.
const port = process.env.PORT || 8000;

const startApp = () => {
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

  console.log("App is listening on port", port);
  app.listen(port);
};

startApp();
