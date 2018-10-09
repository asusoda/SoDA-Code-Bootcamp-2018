import classnames from "classnames";
import * as React from "react";

import "./TodoListItem.css";

type ItemProps = {
  checked: boolean,
  description: string,
  id: number,
  markAsCheckedCallback: (index: number) => void
};

export default class TodoListItem extends React.Component<ItemProps> {
  constructor(props) {
    super(props);

    // Bind event callbacks to instance of React.Component.
    // See https://reactjs.org/docs/handling-events.html for more information.
    this.markAsChecked = this.markAsChecked.bind(this);
  }

  public render() {
    const {
      checked,
      description
    } = this.props;

    const descriptionClasses = classnames({
      checked,
      description: true
    });

    return (
      <div className="todo-list-item">
        <input type="checkbox" checked={checked} onChange={this.markAsChecked} />
        <div className={descriptionClasses}> {description} </div>
      </div>
    );
  }

  // Passthrough to our callback with the ID of the rendered item.
  private markAsChecked() {
    const {
      id,
      markAsCheckedCallback
    } = this.props;
    markAsCheckedCallback(id);
  }
}
