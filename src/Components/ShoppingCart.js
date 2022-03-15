import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <Link
          to="/"
        >
          Voltar
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
