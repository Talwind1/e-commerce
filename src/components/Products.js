import React, { Component } from "react";
import axios from "axios";

export default class Products extends Component {
  state = { data: [], error: "", isLoading: false, cart: {} };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      this.setState({ data, isLoading: false });
    } catch (e) {
      this.setState({ error: e.messege, isLoading: false });
    }
  };

  displayData = () => {
    return this.state.data.map((obj, key) => {
      return (
        <div key={obj.id} className="product">
          <img
            style={{ height: "200px", width: "200px" }}
            src={obj.image}
            alt=""
          />
          <h1>{obj.title}</h1>
          <h2>{obj.price} $</h2>
          <button onClick={() => this.props.clickFunc(obj)}>buy</button>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <h3>Loading..</h3>}
        {this.state.data.length > 0 && this.displayData()}
      </div>
    );
  }
}
