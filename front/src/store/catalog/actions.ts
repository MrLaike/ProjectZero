import { ActionTree } from 'vuex';
import axios from 'axios';
import {
  CatalogState,
  Product,
} from './types';
import { RootState } from '../types';

const actions: ActionTree<CatalogState, RootState> = {
  getProducts: async ({ commit }) => {
    await axios({
      url: 'https://google.com',
    }).then((response) => {
      console.log(response);
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
