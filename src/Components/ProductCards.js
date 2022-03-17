import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCards extends Component {
  handleClick = (_event, product) => {
    const { addToCart } = this.props;
    addToCart(product);
  }

  /* oi */
  render() {
    /*  criamos as porps para serem utilizados no documento pai (SearchBar)
    este componente esta limitado a renderizar cada card */
    const { product: { thumbnail, title, price, id } } = this.props;
    const { product } = this.props;
    return (
      <div className="card-container">
        <Link data-testid="product-detail-link" to={ `/showitem/${id}` }>
          <div className="card">
            <h4 data-testid="product" className="product-title">{title}</h4>
            <img src={ thumbnail } alt={ `Imagem de ${title}` } />
            <p>{price}</p>
          </div>
        </Link>
        <button
          type="button"
          onClick={ (event) => this.handleClick(event, product) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

/*  aqui é feita a validação das props que serão utilizadas no (SearchBar)   */
ProductCards.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  addToCart: PropTypes.func.isRequired,
}.isRequired;

export default ProductCards;
