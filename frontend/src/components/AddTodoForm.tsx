import * as React from "react";

import "./AddTodoForm.css";

type FormProps = {
  submitCallback: (description: string) => void
};

type FormState = {
  description: string
};

export default class AddTodoForm extends React.Component<FormProps, FormState> {
  constructor(props) {
    super(props);

    this.state = {
      description: ""
    };

    // Bind event callbacks to instance of React.Component.
    // See https://reactjs.org/docs/handling-events.html for more information.
    this.updateDescription = this.updateDescription.bind(this);
    this.submit = this.submit.bind(this);
  }

  public render() {
    const { description } = this.state;
    return (
      <form className="add-todo-form" onSubmit={this.submit}>
        <div>
          Create a new item:
        </div>
        <input
          type="text"
          placeholder="Description"
          onChange={this.updateDescription}
          value={description}
        />
        <button type="submit" > Add </button>
      </form>
    );
  }

  // Once we submit, pass our description to the submit callback and clear the
  // value of the form.
  private submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { submitCallback } = this.props;
    const { description } = this.state;
    submitCallback(description);
    this.setState({ description: "" });
  }

  // Each time the value of the input field is changed, we will synchronize
  // its value with the component state.
  private updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      description: event.target.value
    });
  }
}
