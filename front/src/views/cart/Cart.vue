<template>
  <div class="flex flex-wrap">
    <div v-if="productsInCart.length" class="flex flex-wrap w-full">
        <CartItem  v-for="(product) in productsInCart"
            :key=product.id
            :product=product>
        </CartItem>
    </div>
    <div v-else class="flex w-full justify-center">
        <p class="text-2xl">Cart Empty</p>
    </div>
    <div class="w-full flex justify-end">
      <router-link to="/order"
                   class="m-10 p-4 px-8 rounded-lg bg-red-300 hover:bg-red-600">
        Order
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/store/modules/types';
import { Component, Vue, Prop } from 'vue-property-decorator';
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
  productsInCart: Product | undefined;

  beforeMount() {
    console.log(this.productsInCart, this.$store.state.catalog);
  }
}
</script>
