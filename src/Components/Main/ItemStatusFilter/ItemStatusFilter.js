import React, { Component } from "react";
import "./ItemStatusFilter.css";

class ItemStatusFilter extends Component {
  btn = [
    { name: "all", label: "all" },
    { name: "active", label: "active" },
    { name: "done", label: "done" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.btn.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}

export default ItemStatusFilter;
