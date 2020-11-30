import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { CatalogState } from './types';
import { RootState } from '../types';

export const state: CatalogState = {
  error: false,
  products: [
    {
      title: 'sdf',
      price: 1000,
      currency: 'rub',
    },
    {
      title: 'Товарр 2',
      price: 1899,
      currency: 'rub',
    },
  ],
};

const namespaced = true;

export const catalog: Module<CatalogState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
