import { MutationTree } from 'vuex';
import { State } from 'vuex-class';
import { CatalogState, Product } from './types';

const mutations: MutationTree<CatalogState> = {
  setProducts: (state, payload: Array<Product>) => {
    setTimeout(() => {
      state.products = payload;
    },
    2000);
  },
  addProduct: (state: CatalogState, payload: Product) => {
    state.error = false;
    /* eslint no-unused-expressions: [2, { allowShortCircuit: true }] */
    state.products && state.products.push(payload);
  },
};

export default mutations;
