<template>
  <div class="box-content m-3 xl:w-1/4 sm:w-1/2 md:w-1/3 shadow-3xl-light dark:bg-gray-800">
    <router-link :to="{ name: 'Detail', params: { link: product.link } }">
      <img :src="product.image" alt="" class="w-80 h-44">
    </router-link>
    <div class="p-4">
      <router-link
        :to="{ name: 'Detail', params: { link: product.link } }"
        class="hover:underline text-2xl font-bold m-2">
          {{ product.title }}
      </router-link>
      <div class="flex flex-wrap justify-between">
        <p class="m-2 w-full">{{ product.price + ' ' + product.currency }}</p>
        <div class="flex sm:flex-wrap justify-between select-none">
          <button class="p-1 m-2 hover:text-red-600 rounded-sm">
            <Icon :name="favoriteIconType + 'heart'" />
          </button>
          <button @click="addToCart(product.id)"
                  v-if="!cartId.includes(product.id)"
                  class="py-2 m-2 pr-3 bg-gray-300 w-38 hover:bg-yellow-400
                         rounded-lg overflow-hidden">
            <span class="bg-yellow-300 p-3">
              <Icon name="shopping-cart" />
            </span>
            В корзину
          </button>
          <div v-else
                  class="m-2 mr-0 py-2 bg-yellow-400
                         w-38 rounded-lg overflow-hidden">
            <span class="bg-yellow-300 p-3">
              <Icon name="shopping-cart" />
            </span>
            <span @click="deleteFromCart(product.id)"
                    class="py-3 p-2 w-6 hover:bg-yellow-500"> - </span>
            <input type="number" class="px-1 w-10" :value="getQuantity(product.id)">
            <span @click="addToCart(product.id)"
                    class="py-3 p-2 w-6 hover:bg-yellow-500"> + </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Product } from '@/store/modules/types';
import { Action, namespace, State } from 'vuex-class';
import { Component, Vue, Prop } from 'vue-property-decorator';

const catalog = namespace('catalog');
const cart = namespace('cart');

@Component
export default class Item extends Vue {
  @Prop()
  readonly product: Product | undefined;

  @cart.State
  private cart;

  private getQuantity(id) {
    return this.cart.find((cartItem) => cartItem.id === id)?.quantity;
  }

  private favoriteIconType = 'regular/'; // add if in favorte state then solid heart else regular

  private popup = {
    message: '',
    show: false,
  };

  @cart.Action
  private addToCart;

  @cart.Action
  private deleteFromCart;

  private get cartId() {
    return this.$store.state.cart.cart.map((cartItem) => cartItem.id);
  }
}
</script>
