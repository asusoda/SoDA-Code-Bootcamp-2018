import * as React from "react";

import "./TodoListApp.css";

type AppProps = {
  name: string
};

export default class TodoListApp extends React.Component<AppProps> {
  public render() {
    const { name } = this.props;
    return (
      <div className="todo-list-app-container">
        <h1> Welcome to {name}'s React App! </h1>
      </div>
    );
  }
}
