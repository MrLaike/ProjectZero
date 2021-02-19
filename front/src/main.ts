import Vue from 'vue';
import VueApollo from 'vue-apollo';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import VueFormulate from '@braid/vue-formulate';

import '@/styles.css';
import 'vue-awesome/icons';

import Icon from 'vue-awesome/components/Icon.vue';

Vue.config.productionTip = false;
Vue.component('Icon', Icon);
Vue.use(VueFormulate);
Vue.use(VueApollo);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
