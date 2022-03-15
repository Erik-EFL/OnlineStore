import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CartItem from './CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state({
      quantyCart: 1,
      itemsCart: [],
    });
  }

  render() {
    const { cartListItem } = this.props;
    return (
      <div>
        { cartListItem.length === 0
          ? (
            <>
              <h1 data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </h1>
              <Link to="/">Voltar</Link>
            </>
          )
          : cartListItem.map((item) => (
            <CartItem
              item={ item }
              key={ item.product.id }
            />
          ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartListItem: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ShoppingCart;
