import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Home";
import Home from "./components/Cart";

class App extends React.Component {
  state = {
    cart: {},
  };

  buy = (obj) => {
    let cart = this.state.cart;
    let id = obj.id;
    if (cart[id]) {
      cart[id].qnt = cart[id].qnt + 1;
    } else {
      cart[id] = {
        qnt: 1,
        title: obj.title,
        price: obj.price,
        imgUrl: obj.image,
      };
    }
    this.setState({ cart }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <div>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/products"
                render={(props) => <Products clickFunc={this.buy} {...props} />}
              />
              <Route
                exact
                path="/cart"
                render={(props) => <Cart cart={this.state.cart} {...props} />}
              />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
