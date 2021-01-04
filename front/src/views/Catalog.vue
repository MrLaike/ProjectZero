<template>
    <div>
        <p>This is Catalog</p>
        <div v-if="!catalog.error" class="flex flex-wrap justify-center">
            <Item v-for="(product) in catalog.products"
                  :key="product.id"
                  :product="product"/>
        </div>
        <div v-else>
            <p>�� �� ����� �� ���</p>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import Item from '@/components/catalog/Item.vue';
import store from '@/store';
import { CatalogState, Product } from '@/store/catalog/types';

const namespace = 'catalog';

@Component({
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

  public detail(): void {
    console.log(this.$route);
  }

  mounted() {
    this.prod();
  }
}
</script>
