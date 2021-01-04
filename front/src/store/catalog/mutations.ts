import { MutationTree } from 'vuex';
import { CatalogState, Product } from './types';

const mutations: MutationTree<CatalogState> = {
  setProducts: (state, payload: Array<Product>) => {
    state.products = payload;
  },
  setProduct: (state, payload: Product) => {
    state.product = payload;
  },
  addProduct: (state: CatalogState, payload: Product) => {
    state.error = false;
    /* eslint no-unused-expressions: [2, { allowShortCircuit: true }] */
    state.products && state.products.push(payload);
  },
};

export default mutations;
