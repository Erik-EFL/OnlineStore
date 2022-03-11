import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchBar from './Components/SearchBar';
import Category from './Components/Category';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ SearchBar } />
          <Category />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
