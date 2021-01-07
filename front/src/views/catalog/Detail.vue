<template>
  <div class="flex items-start">
    <img class="rounded-3xl p-4 w-100 h-100" :src="product.image" alt="">
    <div class="p-5 content flex flex-wrap">
      <div class="mb-2 font-bold text-4xl"> {{ product.title }} </div>
      <div class="price w-full">
        <div class="py-1 pb-2">
          <span class="font-bold">Price:</span>
          {{ product.price }} {{ product.currency }}
        </div>
      </div>
      <div class="desc w-96">
        <p class="font-bold py-2">Description: </p>
        {{ product.desc }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/store/modules/types';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import {
  Action,
  Getter,
  namespace,
  State,
} from 'vuex-class';

const catalog = namespace('catalog');

@Component
export default class Detial extends Vue {
  link = this.$route.params.link;

  public product: Product = {};

  @catalog.Action('fetchProduct')
  getProduct: any;

  beforeMount() {
    this.getProduct(this.link)
      .then((res: any) => {
        console.log(this.$store.state);
        this.product = this.$store.state.catalog.product;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
}
</script>
