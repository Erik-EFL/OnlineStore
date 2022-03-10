import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchBar from './Components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ SearchBar } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
