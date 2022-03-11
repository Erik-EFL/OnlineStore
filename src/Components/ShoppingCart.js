import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
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
