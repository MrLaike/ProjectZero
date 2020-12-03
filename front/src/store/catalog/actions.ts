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
      url: 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=4323547974d336c1256a9ac0d40bd330',
    })
      .then((response) => {
        console.log(response);
        commit('setProducts', response);
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
