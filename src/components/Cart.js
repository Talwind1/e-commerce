import React, { Component } from "react";

export default class Cart extends Component {
  state = { cart: null };

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  showItems = () => {
    return this.state.cart.map((item) => {
      return (
        <div className="item">
          <h3>{item.title}</h3>
          <h4>quantity: {item.qnt}</h4>
          <h4>price: {item.price}</h4>
          <h4>pay: {item.price * item.qnt}$</h4>
          <img src={item.img} alt="" />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {!this.state.data && <h4>Cart is Empty</h4>}
        {this.state.data && this.showItems()}
      </div>
    );
  }
}
