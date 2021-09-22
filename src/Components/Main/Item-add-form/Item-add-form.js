import React, { Component } from "react";
import "./Item-add-form.css";

class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onChangeItem = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { label } = this.state;
    const { onAddItem } = this.props;

    onAddItem(label);

    this.setState({ label: "" });
  };

  render() {
    const { label } = this.state;

    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onChangeItem}
          placeholder="What needs to be done"
          value={label}
        />
        <button className="btn btn-outline-secondary">Add item</button>
      </form>
    );
  }
}

export default ItemAddForm;
