import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './Components/SearchBar';
import ShoppingCart from './Components/ShoppingCart';
import ShowItem from './Components/ShowItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      /* Armazenara os items a serem exibidos no carrinho  */
      cartListItem: [],
    };
  }

  addToCart = (product) => {
    const { cartListItem } = this.state;
    /* verifica se ha item no carrinho */
    const haveItems = cartListItem.some((item) => item.product.id === product.id);
    /* verifica se a lista tera um novo item */
    const haveANewItem = cartListItem.map((item) => {
      if (item.product.id === product.id) {
        return {
          product: item.product,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    const newItemCart = {
      product,
      quantity: 1,
    };

    this.setState((prev) => ({
      cartListItem: haveItems ? haveANewItem : [...prev.cartListItem, newItemCart],
    }));
  }

  render() {
    const { cartListItem } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/shoppingcart"
              render={ () => <ShoppingCart cartListItem={ cartListItem } /> }
            />
            <Route
              exact
              path="/showitem/:id"
              render={
                (props) => (<ShowItem
                  id={ props.match.params.id }
                  addToCart={ this.addToCart }
q                />)
              }
            />
            <Route
              exact
              path="/"
              render={
                () => (<SearchBar addToCart={ this.addToCart } />)
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
