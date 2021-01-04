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
      id: 1,
      title: 'sdf',
      image: 'sdf',
      link: 'sdf',
      price: 1000,
      currency: 'rub',
    },
  ],
  product: {
    id: 1,
    title: 'sdf',
    image: 'sdf',
    link: 'sdf',
    price: 1000,
    currency: 'rub',
  },
};

const namespaced = true;

export const catalog: Module<CatalogState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
