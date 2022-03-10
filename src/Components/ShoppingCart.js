import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-empty-message"
          to="/"
        >
          Seu carrinho está vazio
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
