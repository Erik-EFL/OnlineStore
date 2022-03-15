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
    const { id } = this.props;
    this.getAtributes(id);
  }

  getAtributes = async (id) => {
    const items = await api.getProductDetails(id);
    this.setState({
      atributes: items,
    });
  }

  render() {
    const { atributes } = this.state;
    console.log(atributes);
    return (
      <div>
        <Link to="/shoppingcart">Carrinho</Link>
        <Link to="/">Search</Link>
        <div className="container-product" key={ atributes.id }>
          <h2 data-testid="product-detail-name">{atributes.title}</h2>
          <img src={ atributes.thumbnail } alt={ atributes.title } />
          <p>{atributes.price}</p>
        </div>
      </div>
    );
  }
}

ShowItem.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ShowItem;
