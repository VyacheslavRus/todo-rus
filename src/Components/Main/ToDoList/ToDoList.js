import React from "react";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import "./ToDoList.css";

const ToDoList = ({ todos, onDeleteItem, onToggleImportant, onToggleDone }) => {
  return (
    <ul className="list-group todo-list">
      {todos.map(({ id, label, done, important }) => (
        <ToDoListItem
          key={id}
          label={label}
          id={id}
          done={done}
          important={important}
          onDeleteItem={() => onDeleteItem(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
