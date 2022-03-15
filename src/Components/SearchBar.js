import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as api from '../services/api';
import ProductCards from './ProductCards';
import Category from './Category';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      inputName: '',
    };
  }

  /*  esta  function faz a captura do valor digitado no input
  e muda o estado inicial do inputName */
  onChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputName: value });
  }

  /*  Recebemos auxilio do nosso ilustríssimo Sugano  */
  /* esta function passa para a API os valor buscado dentro do input
  e insere um novo valor ao estado products */
  getProductsApi = async () => {
    // event.preventDefault();
    const { inputName } = this.state;
    const items = await api.getProductsFromCategory(inputName);
    this.setState({
      products: items,
    });
  }

  productId = async () => {
    const { id } = this.state;
    await api.getProductDetails(id);
  }

  render() {
    /*  importamos os estados abaixo para serem utilizado na renderização dos cards  */
    const {
      products, inputName,
    } = this.state;
    const { addToCart } = this.props;
    return (
      <>
        <div className="search-box">
          <input
            type="text"
            name=""
            placeholder="Pesquise aqui o seu produto"
            data-testid="query-input"
            value={ inputName }
            onChange={ this.onChange } /* utilizado para capturar o valor do input como explicado acima */
          />
        </div>

        <button
          type="button"
          onClick={ this.getProductsApi } /* utilizado para executar o filtro */
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* verifica se o estado products esta vazio caso sim retorna a msg
        caso não retorna os cards */}
        {products.length > 0
          ? products.map((item) => (
            <ProductCards
              key={ item.id }
              /* thumbnail={ item.thumbnail }
              title={ item.title }
              price={ item.price }
              id={ item.id } */
              product={ item }
              onClick={ this.productId }
              addToCart={ addToCart }
            />
          ))
          : <h3> Nenhum produto encontrado </h3>}

        <Link
          to="/shoppingcart"
        >
          <h1><AiOutlineShoppingCart data-testid="shopping-cart-button" /></h1>
        </Link>
        <p>Você ainda não realizou nenhuma busca</p>
        <Category />
      </>
    );
  }
}

SearchBar.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default SearchBar;
