import * as path from "path";
import * as sequelize from "sequelize";

const databasePath = path.resolve(__dirname, "..", "todos.db");

const sequelizeConnection = new sequelize("todos", "", "", {
  dialect: "sqlite",
  storage: databasePath
});

const TodoModel = sequelizeConnection.define("todo", {
  checked: sequelize.BOOLEAN,
  description: sequelize.STRING
});

// Connect to the database and ensure models are created before trying to use
const initDataLayer = async () => {
  await sequelizeConnection.authenticate();
  await sequelizeConnection.sync();
};

export {
  initDataLayer,
  TodoModel
};
