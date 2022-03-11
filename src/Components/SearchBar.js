import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingcart"
        >
          Carrinho de Compras
        </Link>
        <p>Você ainda não realizou nenhuma busca</p>
      </>
    );
  }
}

export default SearchBar;
