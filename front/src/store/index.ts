import { createStore } from 'vuex';
import { RootState } from './types';
import { catalog } from './catalog/index';

const state: RootState = {

};

const modules = {
  catalog,
};

export default createStore({
  state,
  modules,
});
