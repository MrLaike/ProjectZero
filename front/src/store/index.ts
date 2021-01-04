import VuexPersist from 'vuex-persist';
import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './types';
import { catalog } from './catalog/index';

const state: RootState = {

};

const modules = {
  catalog,
};

const vuexLocalStorage = new VuexPersist({
  key: 'source',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  modules,
});
