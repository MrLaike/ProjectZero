<template>
  <div class="flex items-start">
    <img class="rounded-3xl p-4 w-100 h-100" :src="product.product.image" alt="">
    <div class="p-5 content flex flex-wrap">
      <div class="mb-2 font-bold text-4xl"> {{ product.product.title }} </div>
      <div class="price w-full">
        <div class="py-1 pb-2">
          <span class="font-bold">Price:</span>
          {{ product.product.price }} {{ product.product.currency }}
        </div>
      </div>
      <div class="desc w-96">
        <p class="font-bold py-2">Description: </p>
        {{ product.product.desc }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/store/catalog/types';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

const namespace = 'catalog';

@Component
export default class Detial extends Vue {
  private link = this.$route.params.link;

  @State(namespace)
  product: Product | undefined;

  public productObj = '';

  @Action('getProduct', { namespace })
  getProduct: any;

  mounted() {
    this.getProduct();
  }
}
</script>
