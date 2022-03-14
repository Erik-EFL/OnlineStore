import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message"><AiOutlineShoppingCart /></h1>
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
