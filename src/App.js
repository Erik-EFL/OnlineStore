import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './Components/SearchBar';
import Category from './Components/Category';
import ShoppingCart from './Components/ShoppingCart';
import ShowItem from './Components/ShowItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ SearchBar } />
            <Route path="/shoppingcart" component={ ShoppingCart } />
            <Route
              exact
              path="/showitem/:id"
              render={
                (props) => <ShowItem { ...props.match.params } />
              }
            />
          </Switch>
          <Category />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
