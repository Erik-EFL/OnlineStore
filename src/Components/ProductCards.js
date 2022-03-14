import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCards extends Component {
  render() {
    /*  criamos as porps para serem utilizados no documento pai (SearchBar)
    este componente esta limitado a renderizar cada card */
    const { thumbnail, title, price } = this.props;
    return (
      <div className="card-container">
        <div className="card">
          <h4 data-testid="product" className="product-title">{title}</h4>
          <img src={ thumbnail } alt={ `Imagem de ${title}` } />
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

/*  aqui é feita a validação das props que serão utilizadas no (SearchBar)   */
ProductCards.propTypes = {
  price: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default ProductCards;