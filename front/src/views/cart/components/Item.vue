<template>
  <div class="flex justify-between box-content
              mx-10 my-3 w-full p-4 shadow-3xl-light dark:bg-gray-800">
    <router-link
      :to="{ name: 'Detail', params: { link: product.link } }"
      class="hover:underline text-2xl font-bold m-2">
        {{ product.title }}
    </router-link>
    <p class="m-2">{{ product.price * product.quantity + ' ' + product.currency }}</p>
    <div class="m-2 mr-0 py-2 bg-yellow-400 select-none
                   w-38 rounded-lg overflow-hidden">
      <span @click="deleteFromCart(product.id)" class="p-4 w-6 hover:bg-yellow-500">-</span>
      <input type="number" class="px-1 w-10" :value="product.quantity">
      <span @click="addToCart(product.id)" class="p-3 w-6 hover:bg-yellow-500">+</span>
    </div>
    <div class="flex sm:flex-wrap justify-between">
      <button class="p-2 m-2 px-4 hover:bg-red-600 rounded-sm">
        <Icon :name="favoriteIconType + 'heart'" />
      </button>
      <button @click="removeFromCart(product.id)"
              class="p-2 m-2 px-4 hover:bg-red-600 rounded-sm">
        <Icon name="times" />
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
  readonly product: Product | undefined;

  private favoriteIconType = 'regular/';

  @cart.Action
  private deleteFromCart: any;

  @cart.Action
  private addToCart: any;

  @cart.Action
  private removeFromCart;
}
</script>
