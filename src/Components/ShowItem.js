import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ShowItem extends Component {
  constructor() {
    super();
    this.state = {
      atributes: [],
      name: '',
      price: '',
      thumbnail: '',
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

  render() {
    const { name, imagem, price, atributes } = this.props;
    return (
      <div>
        <Link to="/shoppingcart">Carrinho</Link>
        <Link to="/searchbar">Search</Link>

        {atributes.map((atribute) => (
          <div key={ atribute.id } className="container-product">
            <h2 data-testid="product-detail-name">
              {`${atribute.name} - <span>${atribute.price}</span>`}
            </h2>
            <div className="img-container">
              <img src={ atribute.imagem } alt={ atribute.name } />
            </div>
            <div className="spec-container">
              <h4>Especificações Técnicas</h4>
              <ul>
                <li>{ atribute }</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ShowItem.propTypes = {
  name: PropTypes.string,
  imagem: PropTypes.string,
  price: PropTypes.string,
  atributes: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default ShowItem;
