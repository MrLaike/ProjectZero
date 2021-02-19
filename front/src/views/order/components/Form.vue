<template>
</template>

<script lang="ts">
import { Product } from '@/store/modules/types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const order = namespace('order');
const cart = namespace('cart');

@Component
export default class Form extends Vue {
  @Prop()
  private values;

  private successOrder = false;

  @order.Action
  private addOrder: any;

  @cart.Getter
  private totalPrice?: number;

  @cart.Getter
  private productsInCart?: Array<Product>;

  private checkout(data): void {
    const productsId = this.productsInCart?.map(
      (product) => product.id,
    );
    console.log(this.productsInCart, productsId);

    const addProduct = {
      totalPrice: this.totalPrice,
      products: productsId,
    };

    Object.assign(data, addProduct); // add send quantity

    this.addOrder(data)
      .then(
        (res) => {
          if (!res.error) this.successOrder = true;
        },
      )
      .catch();
    console.log(data, this);
  }
}
</script>
