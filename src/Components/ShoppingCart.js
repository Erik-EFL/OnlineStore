import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

class ShoppingCart extends Component {
  render() {
    const { cartListItem } = this.props;
    return (
      <div>
        { cartListItem.length === 0
          ? (
            <h1 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h1>
          )
          : cartListItem.map((item) => (
            <CartItem
              item={ item }
              key={ item.product.id }
            />
          ))}
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartListItem: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ShoppingCart;
