import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <>
        <input
          type="text"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

export default SearchBar;
