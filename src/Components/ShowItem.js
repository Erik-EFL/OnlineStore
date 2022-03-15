import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ShowItem extends Component {
  constructor() {
    super();
    this.state = {
      atributes: [],
    };
  }

  componentDidMount = () => {
    const { match: { params: { id } } } = this.props;
    this.getAtributes(id);
  }

  getAtributes = async (id) => {
    const items = await api.getProductDetails(id);
    this.setState({
      atributes: items,
    });
  }

  onclick = ({ target }) => {
    const product = target.parentNode;
    console.log(product);
  }

  render() {
    const { atributes } = this.state;
    console.log(atributes);
    return (
      <div>
        <div>
          <Link to="/shoppingcart">Carrinho</Link>
          <Link to="/">Search</Link>
        </div>
        <div>
          <div className="container-product" key={ atributes.id }>
            <h2 data-testid="product-detail-name">{atributes.title}</h2>
            <img src={ atributes.thumbnail } alt={ atributes.title } />
            <p>{atributes.price}</p>
          </div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.onclick }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ShowItem.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ShowItem;
