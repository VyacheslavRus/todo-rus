import React, { Component } from "react";
import SearchPanel from "./SearchPanel/SearchPanel";
import ToDoList from "./ToDoList/ToDoList";
import "./Main.css";
import ItemStatusFilter from "./ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "./Item-add-form/Item-add-form";

class Main extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
    filter: "active",
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  onAddItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return { todoData: newArr };
    });
  };

  onDeleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newToDo = todoData.filter((item) => item.id !== id);
      const newArray = [...newToDo];
      return { todoData: newArray };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oneItem = todoData[idx];
      const newItem = { ...oneItem, done: !oneItem.done };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return { todoData: newArray };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oneItem = todoData[idx];
      const newItem = { ...oneItem, important: !oneItem.important };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      return { todoData: newArray };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filterItems(items, filter) {
    if (filter === "all") {
      return items;
    } else if (filter === "active") {
      return items.filter((item) => !item.done);
    } else if (filter === "done") {
      return items.filter((item) => item.done);
    }
  }

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filterItems(this.search(todoData, term), filter);

    const doneTodos = todoData.filter((el) => el.done).length;
    const leftTodo = todoData.length - doneTodos;

    return (
      <main className="top-panel">
        <div className="header d-flex">
          <h1>My Todo List</h1>
          <h2>
            {leftTodo} more to do, {doneTodos} done
          </h2>
        </div>
        <div className="search-panel">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <ToDoList
          todos={visibleItems}
          onDeleteItem={this.onDeleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAddItem={this.onAddItem} />
      </main>
    );
  }
}

export default Main;
