<template>
  <div class="flex justify-between box-content m-10 w-full p-4 shadow-md dark:bg-gray-800">
    <router-link
      :to="{ name: 'Detail', params: { link: product.link } }"
      class="hover:underline text-2xl font-bold m-2">
        {{ product.title }}
    </router-link>
    <p class="m-2">{{ product.price + ' ' + product.currency }}</p>
    <div class="flex sm:flex-wrap justify-between">
      <button class="p-2 m-2 px-4 bg-red-300 hover:bg-red-600 rounded-sm">
        Favorite
      </button>
      <button @click="removeFromCart(product.id)"
              class="p-2 m-2 px-4 bg-red-300 hover:bg-red-600 rounded-sm">
        Remove from Cart
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Action, namespace, State } from 'vuex-class';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Product } from '@/store/modules/types';

const cart = namespace('cart');

@Component
export default class Item extends Vue {
  @Prop()
  readonly product: any | undefined;

  @cart.Action('removeFromCart')
  private removeFromCart: any;
}
</script>
