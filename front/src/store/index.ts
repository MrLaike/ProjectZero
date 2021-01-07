import VuexPersist from 'vuex-persist';
import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './types';
import Catalog from './modules/catalog';
import Cart from './modules/cart';

const state: RootState = {

};

const modules = {
  catalog: Catalog,
  cart: Cart,
};

const vuexLocalStorage = new VuexPersist({
  key: 'source',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  modules,
  plugins: [vuexLocalStorage.plugin],
});
