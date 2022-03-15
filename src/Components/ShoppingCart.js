import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state({
      quantyCart: 1,
      itemsCart: [],
    });
  }

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
