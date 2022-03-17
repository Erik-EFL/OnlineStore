import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ShowItem extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  handleClick = (_event, product) => {
    const { addToCart } = this.props;
    addToCart(product);
  }

  componentDidMount = () => {
    const { id } = this.props;
    this.getAtributes(id);
  }

  getAtributes = async (id) => {
    const items = await api.getProductDetails(id);
    this.setState({
      product: items,
    });
  }

  render() {
    const { product: { id, title, thumbnail, price } } = this.state;
    const { product } = this.state;
    return (
      <div>
        <div>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">Carrinho</Link>
          <Link to="/">Search</Link>
        </div>
        <div>
          <div className="container-product" key={ id }>
            <h2 data-testid="product-detail-name">{title}</h2>
            <img src={ thumbnail } alt={ title } />
            <p>{price}</p>
          </div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ (event) => this.handleClick(event, product) }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ShowItem.propTypes = {
  id: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
}.isRequired;

export default ShowItem;
