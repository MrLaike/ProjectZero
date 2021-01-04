import { ActionTree } from 'vuex';
import axios from 'axios';
import {
  CatalogState,
} from './types';
import { RootState } from '../types';

const actions: ActionTree<CatalogState, RootState> = {
  fetchProducts: async ({ commit }) => {
    await axios.request<CatalogState>({
      url: 'http://127.0.0.1:8000/graphql?query=query{products{id,image,link,title,price,currency}}',
    })
      .then((response) => {
        console.log(response);
        commit('setProducts', response.data.data.products);
      }).catch((reject) => {
        console.log(reject);
      });
  },

  getProduct: async ({ state, commit }) => {
    const link = 'est';
    await axios.request<CatalogState>({
      url: `http://127.0.0.1:8000/graphql?query=query{product(link:"${link}"){id,image,link,desc,title,price,currency}}`,
    })
      .then((response) => {
        console.log(response);
        commit('setProduct', response.data.data.product);
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
