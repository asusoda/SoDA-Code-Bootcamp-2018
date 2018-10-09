import * as React from "react";

import { Todo } from "../../../shared/schema/Todo";
import TodoListItem from "./TodoListItem";

import "./TodoListApp.css";

type AppProps = {
  name: string
};

type AppState = {
  // This map is structured such that a Todo's key is its ID and the value is a
  // reference to that Todo. This facilitates constant-time lookups when we need
  // to toggle the status of a Todo.
  todos: Map<number, Todo>
};

export default class TodoListApp extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);

    // Initialize state with an empty list of todos
    this.state = {
      todos: new Map<number, Todo>()
    };

    // Bind event callbacks to instance of React.Component.
    // See https://reactjs.org/docs/handling-events.html for more information.
    this.addTodo = this.addTodo.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  // Once the component has finished mounting, load a list of todos to display.
  public componentDidMount() {
    this.getTodos();
  }

  public render() {
    const { todos } = this.state;
    const { name } = this.props;

    // Create a TodoListItem component for each Todo
    const todoList: JSX.Element[] = [];
    for (const todoEntry of todos.entries()) {
      // Destructure id and todo from the todoEntry tuple ([number, TodoEntry])
      const [id, todo] = todoEntry;
      // Concatenate a new component to the list of Todos
      todoList.push(
        <TodoListItem
          checked={todo.checked}
          description={todo.description}
          id={id}
          key={id}
          markAsCheckedCallback={this.toggleChecked}
        />
      );
    }

    return (
      <div className="todo-list-app-container">
        <h1> Welcome to {name}'s React App! </h1>
        <div className="todo-list-app">
          <h3> Here is a list of things to do: </h3>
          <div className="todo-list-container">
            {todoList}
          </div>
        </div>
      </div>
    );
  }

  private async addTodo(description: string) {
    // TODO
  }

  private async getTodos() {
    // TODO
  }

  private async toggleChecked(id: number) {
    // TODO
  }
}
