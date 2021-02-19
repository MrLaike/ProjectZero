<template>
  <div class="flex flex-wrap">
    <h1 class="text-2xl text-center w-full m-6 font-bold">Корзина</h1>
    <div v-if="productsInCart.length" class="flex flex-wrap w-full">
        <CartItem  v-for="(product) in productsInCart"
            :key="product.id"
            :product="product"/>
    </div>
    <div v-else class="flex w-full justify-center">
        <p class="text-2xl text-gray-600 h-full">Тут пусто</p>
    </div>
    <div v-if="totalPrice > 0" class="w-full flex items-center justify-end">
      <div>
        <span>Total price: </span>
        <span>{{ totalPrice }} {{ currency }}</span>
      </div>
      <router-link to="/order"
                   class="m-10 p-4 px-8 rounded-lg bg-red-300 hover:bg-red-600">
        Order
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/store/modules/types';
import { Component, Vue } from 'vue-property-decorator';
import { namespace, State } from 'vuex-class';
import CartItem from '@/views/cart/components/Item.vue';

const cart = namespace('cart');

@Component({
  components: {
    CartItem,
  },
})
export default class Cart extends Vue {
  @cart.Getter
  productsInCart: Array<Product> | undefined;

  @cart.Getter
  totalPrice: number | undefined;

  @cart.Getter
  currency: string | undefined;

  beforeMount() {
    console.log(this.productsInCart, this.$store.state.catalog);
  }
}
</script>
