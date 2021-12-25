import React, { Component } from "react";

export default class updateModal extends Component {
  state = {
    brand: "",
    url: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ name: value }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={onInputChange}
          name="brand"
          placeholder="brand"
          value={this.state.newBrand}
        ></input>
        <input
          type="text"
          onChange={onInputChange}
          name="url"
          placeholder="url"
          value={this.state.newUrl}
        ></input>
      </div>
    );
  }
}
