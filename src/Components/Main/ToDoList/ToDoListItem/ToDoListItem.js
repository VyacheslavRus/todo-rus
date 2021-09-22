import React, { Component } from "react";
import "./ToDoListItem.css";

class ToDoListItem extends Component {
  // state = {
  //   done: false,
  //   important: false,
  // };

  // onLabelClick = () => {
  //   this.setState(({ done }) => {
  //     return {
  //       done: !done,
  //     };
  //   });
  // };

  // onMarkImportant = () => {
  //   this.setState(({ important }) => {
  //     return {
  //       important: !important,
  //     };
  //   });
  // };

  render() {
    const {
      label,
      done,
      important,
      onDeleteItem,
      onToggleImportant,
      onToggleDone,
    } = this.props;

    // const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <>
        <li className="list-group-item">
          <span className={classNames}>
            <span className="todo-list-item-label" onClick={onToggleDone}>
              {label}
            </span>
          </span>
          <span>
            <button
              type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}
            >
              <i className="bi bi-exclamation" />
            </button>

            <button
              onClick={onDeleteItem}
              type="button"
              className="btn btn-outline-danger btn-sm float-right"
            >
              <i className="bi bi-trash" />
            </button>
          </span>
        </li>
      </>
    );
  }
}

export default ToDoListItem;
