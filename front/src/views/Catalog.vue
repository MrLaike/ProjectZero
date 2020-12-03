<template>
    <div class="container">
        <p>This is Catalog</p>
        {{ catalog.products }}
        <div v-if="!catalog.error">
            <Item v-for="(product, index) in catalog.products"
                  :key="index"
                  :product="product"/>
        </div>
        <div v-else>
            <p>Че то пошло не так</p>
        </div>
    </div>
</template>

<script lang="ts">

import store from '@/store';
import { CatalogState, Product } from '@/store/catalog/types';
import { Options, Vue } from 'vue-class-component';
import Item from '@/components/catalog/Item.vue';
import { mapState, mapGetters } from 'vuex';
import { State, Action, Getter } from 'vuex-class';

const namespace = 'catalog';

@Options({
  components: {
    Item,
  },
})
export default class Catalog extends Vue {
  @State(namespace)
  catalog: CatalogState | undefined;

  @Getter('allProducts', { namespace })
  allProducts: Array<Product> | undefined;

  @Action('fetchProducts', { namespace })
  prod: any;

  mounted() {
    this.prod();
  }
}
</script>
