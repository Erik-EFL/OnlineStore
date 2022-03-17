import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
    };
  }

  handleClickMais = () => {
    this.setState((estadoAnterior) => ({
      quantidade: estadoAnterior.quantidade + 1,
    }));
  };

  handleClickMenos = () => {
    this.setState((estadoAnterior) => ({
      quantidade: estadoAnterior.quantidade - 1,
    }));
  };

  render() {
    const { item: { product: { id, title, price, thumbnail } } } = this.props;
    const { quantidade } = this.state;
    const priceTotal = Number(price) * Number(quantidade);
    return (
      <div className="item-container" id={ id }>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        <p>{`R$: ${priceTotal}`}</p>
        <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${quantidade}`}</p>
        <button
          type="button"
          onClick={ this.handleClickMais }
          data-testid="product-increase-quantity"
        >
          {' '}
          +
          {' '}

        </button>
        <button
          type="button"
          onClick={ this.handleClickMenos }
          data-testid="product-decrease-quantity"
        >
          {' '}
          -
          {' '}
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CartItem;
