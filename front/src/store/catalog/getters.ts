import { GetterTree } from 'vuex';
import { RootState } from '../types';
import {
  CatalogState,
  Product,
} from './types';

const getters: GetterTree<CatalogState, RootState> = {
  allProducts: (state): Array<Product> | undefined => {
    const { products } = state;
    return products;
  },
};

export default getters;
