<template>
    <div class="flex flex-wrap justify-center">
        <h2 class="font-bold text-2xl m-4">This is Catalog</h2>
        <div v-if="!!products" class="flex flex-wrap justify-center">
            <Item v-for="(product) in products"
                  :key="product.id"
                  :product="product"/>
        </div>
        <div v-else>
            <p>Уккщк</p>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import {
  State,
  Action,
  Getter,
  namespace,
} from 'vuex-class';
import Item from '@/views/catalog/components/Item.vue';
import store from '@/store';
import { CatalogState, Product } from '@/store/modules/types';

const catalog = namespace('catalog');

@Component({
  components: {
    Item,
  },
})
export default class Catalog extends Vue {
  public catalog: CatalogState | undefined;

  public products: any = '';

  @catalog.Action('fetchProducts')
  prod: any;

  beforeMount() {
    this.prod()
      .then((resp: any) => {
        this.products = this.$store.state.catalog.products;
      })
      .catch((err: string) => {
        console.log(err);
      });
  }
}
</script>
