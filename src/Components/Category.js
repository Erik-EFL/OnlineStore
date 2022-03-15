import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductCards from './ProductCards';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      /*  criado para armazenar as categorias  */
      category: [],
      productsByCategory: [],
    };
  }

  componentDidMount = () => {
    /*  função usada para que os dados da api cheguem na pagina antes de forma
    assíncrona  */
    this.getApiCategories();
  }

  getApiCategories = async () => {
    /*  função criada para recurar os estados da categoria e setar o novo estado */
    const getCategory = await api.getCategories();
    this.setState({
      category: getCategory,
    });
  }

  handleClick = async ({ target }) => {
    // Captura o Value da categoria clicada, faz busca na api com o value e adiciona no estado.
    const { value } = target;
    const categoryValue = await api.getProductsFromCategory(value);
    this.setState({
      productsByCategory: categoryValue,
    });
  }

  productId = async () => {
    const { id } = this.state;
    await api.getProductDetails(id);
  }

  render() {
    const {
      category, productsByCategory,
    } = this.state;
    const { addToCart } = this.props;
    return (
      <div>
        <div className="sidebar">
          {
            /* O map esta fazendo o mapeamento do estado category
              onde foram armazenados os dados retirados a api */
            category.map((categories) => (
              <div key={ categories.id }>
                <label htmlFor={ categories.id }>
                  <input
                    data-testid="category"
                    value={ categories.name }
                    onClick={ this.handleClick }
                    name={ categories.name }
                    type="button"
                    id={ categories.id }
                  />
                  { categories.name }
                </label>
              </div>
            ))
          }
        </div>
        <div>
          {productsByCategory.map((item) => (
            // Mapeia e renderiza os produtos pesquisados pela categoria.
            <ProductCards
              key={ item.id }
              /* title={ item.title }
                thumbnail={ item.thumbnail }
                price={ item.price } */
              product={ item }
              addToCart={ addToCart }
            />
          ))}
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  addToCart: PropTypes.func.isRequired,
}.isRequired;

export default Category;
