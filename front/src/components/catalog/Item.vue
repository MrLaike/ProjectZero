<template>
  <div class="box-content m-3 w-1/4 p-4 shadow-md dark:bg-gray-800">
    <img :src="product.image" alt="" class="w-full h-44">
    <a :href="'catalog/' + product.link"
    class="hover:underline text-lg font-bold">{{ product.title }}</a>
    <p>{{ product.price + ' ' + product.currency }}</p>
  </div>
</template>

<script lang="ts">
import { Product } from '@/store/catalog/types';
import { State } from 'vuex-class';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
  @Prop()
  readonly product: any | undefined;
}
</script>
