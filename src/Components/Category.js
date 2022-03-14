import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      /*  criado para armazenar as categorias  */
      category: [],
      categoryName: '',
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const categoryValue = await api.getProductsFromCategory(value);
    console.log(categoryValue);
    this.setState({
      categoryName: categoryValue,
    });
  }

  render() {
    const {
      category, categoryName,
    } = this.state;
    console.log(categoryName);
    return (

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

    );
  }
}

export default Category;
