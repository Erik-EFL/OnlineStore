import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './Components/SearchBar';
import Category from './Components/Category';
import ShoppingCart from './Components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Category />
          <Switch>
            <Route exact path="/" component={ SearchBar } />
            <Route path="/shoppingcart" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
