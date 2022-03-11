import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      /*  criado para armazenar as categorias  */
      category: [],
    };
  }

  componentDidMount = () => {
    /*  função usada para que os dados da api cheguem na pagina antes de forma
    assíncrona  */
    this.getApiCategories();
  }

  getApiCategories = async () => {
    /*  função criada para recurar os estados da categoria e setar o novo estado */
    const qualquerCoisa = await api.getCategories();
    this.setState({
      category: qualquerCoisa,
    });
  }

  render() {
    const {
      category,
    } = this.state;
    return (
      <div>
        <div className="sidebar">
          {
            /* O map esta fazendo o mapeamento do estado category
            onde foram armazenados os dados retirados a api */
            category.map((categories) => (
              <label key={ categories.id } htmlFor={ categories.id }>
                <input
                  data-testid="category"
                  type="radio"
                  id={ categories.id }
                />
                { categories.name }
              </label>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Category;
