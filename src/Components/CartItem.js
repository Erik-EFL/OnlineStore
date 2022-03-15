import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { item: { product: { id, title, price, thumbnail } } } = this.props;
    const { item: { quantity } } = this.props;
    return (
      <div className="item-container" id={ id }>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        <p>{`R$: ${price}`}</p>
        <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${quantity}`}</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CartItem;
