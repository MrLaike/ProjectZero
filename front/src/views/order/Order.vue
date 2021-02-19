<template>
  <div class="flex flex-wrap">
    <h3 class="font-bold text-2xl text-center w-full">Order</h3>
    <div v-if="!successOrder">
      <Item v-for="product in productsInCart" :key="product.id" :product="product"/>
      <FormulateForm @submit="checkout">
        <FormulateInput type="text"
                        name="fullName"
                        validation="required"
                        label="Enter Full name"/>
        <FormulateInput type="email"
                        name="email"
                        validation="required|email"
                        label="Enter Email"/>
        <FormulateInput type="text"
                        name="phone"
                        validation="required|number"
                        label="Enter Phone"/>
        <FormulateInput type="submit"
                        name="Оформить заказ"/>
      </FormulateForm>
    </div>
    <div v-else>
      <h2>Заказ оформлен</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/store/modules/types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Item from '@/views/order/components/Item.vue';

const cart = namespace('cart');
const order = namespace('order');

@Component({
  components: {
    Item,
  },
})
export default class Order extends Vue {
  @Prop()
  private values;

  private successOrder = false;

  @order.Action
  private addOrder: any;

  @cart.Action
  private clearCart: any;

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
          if (!res.error) {
            this.successOrder = true;
            this.clearCart();
          }
        },
      )
      .catch();
    console.log(data, this);
  }
}
</script>
