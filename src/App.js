import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Home";
import Home from "./components/Cart";

class App extends React.Component {
  state = {
    cart: {}, //structure: { id: qnt}}
  };

  buy = (obj) => {
    let cart = this.state.cart;
    // let id = ;
    cart.obj.id = cart.obj.id + 1 || 1;
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
              <Route exact path="/" component={Cart} />
              <Route
                exact
                path="/products"
                render={(props) => <Products clickFunc={this.buy} {...props} />}
              />
              <Route exact path="/cart" component={Home} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
