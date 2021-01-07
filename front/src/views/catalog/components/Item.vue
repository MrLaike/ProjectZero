<template>
  <div class="box-content m-3 w-1/4 p-4 shadow-md dark:bg-gray-800">
    <img :src="product.image" alt="" class="w-full h-44">
    <router-link
      :to="{ name: 'Detail', params: { link: product.link } }"
      class="hover:underline text-2xl font-bold m-2">
        {{ product.title }}
    </router-link>
    <div class="flex sm:flex-wrap justify-between">
      <p class="m-2">{{ product.price + ' ' + product.currency }}</p>
      <div class="flex sm:flex-wrap justify-between">
        <button class="p-2 m-2 px-4 bg-red-300 hover:bg-red-600 rounded-sm">
          Favorite
        </button>
        <button @click="addToCart(product.id)"
                class="p-2 m-2 px-4 bg-red-300 hover:bg-red-600 rounded-sm">
          Add to Cart
        </button>
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

  private popup = {
    message: '',
    show: false,
  };

  @cart.Action('addToCart')
  private add: any;

  private addToCart(id: number) {
    this.add(id)
      .then(() => {
        this.popup = {
          message: 'Успешно добавлено',
          show: true,
        };
      })
      .catch((error: string) => {
        console.log(error);
      });
  }
}
</script>
