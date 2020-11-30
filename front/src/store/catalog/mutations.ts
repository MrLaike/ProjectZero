import { MutationTree } from 'vuex';
import { CatalogState, Product } from './types';

const mutations: MutationTree<CatalogState> = {
  addProduct: (state, payload: Product) => {
    state.error = false;
    state.products = [payload];
  },
};

export default mutations;
