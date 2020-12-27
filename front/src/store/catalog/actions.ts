import { ActionTree } from 'vuex';
import axios from 'axios';
import {
  CatalogState,
  Product,
} from './types';
import { RootState } from '../types';

const actions: ActionTree<CatalogState, RootState> = {
  fetchProducts: async ({ commit }) => {
    await axios.request<CatalogState>({
      url: 'http://127.0.0.1:8000/graphql?query=query{allProducts{id,title,price,created_at}}',
    })
      .then((response) => {
        console.log(response);
        commit('setProducts', response.data);
      }).catch((reject) => {
        console.log(reject);
      });
  },

  addProduct: async ({ commit }) => {
    await axios({
      url: '',
    }).then((response) => {
      console.log(response);
    }).catch((reject) => {
      console.log(reject);
    });
  },
};

export default actions;
