import VuexPersist from 'vuex-persist';
import localForage from 'localforage';
import { createStore } from 'vuex';
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

const plugins = [vuexLocalStorage.plugin];

export default createStore({
  state,
  modules,
  plugins,
});
