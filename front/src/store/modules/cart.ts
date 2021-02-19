import {
  VuexModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import { CartType, CatalogState, Product } from './types';

/* eslint class-methods-use-this: "off" */
@Module({
  namespaced: true,
  preserveState: true,
})
class Cart extends VuexModule {
  private cart: Array<CartType> = [];

  get productsInCart(): Array<any> {
    return this.cart.map(({ id, quantity }) => {
      const product = this.context.rootState.catalog.products
        .find((prod: Product) => prod.id === id);
      return {
        id,
        title: product.title,
        price: product.price,
        currency: product.currency,
        link: product.link,
        quantity,
      };
    });
  }

  get currency(): string {
    return this.context.rootState.catalog.products[0].currency;
  }

  get totalPrice(): number {
    if (this.cart.length) {
      return this.cart
        .map(
          ({ id, quantity }) => {
            const product = this.context.rootState.catalog.products.find(
              (prod: Product) => prod.id === id,
            );
            return product.price * quantity;
          },
        )
        .reduce(
          (totalPrice, currentPrice) => totalPrice + currentPrice,
        );
    }
    return 0;
  }

  @Action({ rawError: true })
  public cartEmpty(): boolean {
    return !this.cart.length;
  }

  @Action({ rawError: true })
  public addToCart(id: number): void {
    this.context.commit('addCart', id);
  }

  @Action({ rawError: true })
  public removeFromCart(id: number): void {
    this.context.commit('removeCartItem', id);
  }

  @Action({ rawError: true })
  public clearCart(id: number): void {
    this.context.commit('clearCartItems', id);
  }

  @Action({ rawError: true })
  public deleteFromCart(id: number): void {
    this.context.commit('deleteCart', id);
  }

  @Mutation
  private addCart(id: number): void {
    const cart = this.cart.find((cartItem: CartType) => cartItem.id === id);

    if (cart) {
      cart.quantity += 1;
    } else {
      this.cart.push({
        id,
        quantity: 1,
      });
    }
  }

  @Mutation
  private removeCartItem(id: number): void {
    const index = this.cart.findIndex((cartItem: CartType) => cartItem.id === id);
    this.cart.splice(index, 1);
  }

  @Mutation
  private clearCartItems(): void {
    this.cart = [];
  }

  @Mutation
  private deleteCart(id: number): void {
    const index = this.cart.findIndex((cartItem: CartType) => cartItem.id === id);
    const cart = this.cart[index];

    if (cart.quantity > 1) {
      cart.quantity -= 1;
    } else {
      this.cart.splice(index, 1);
    }
  }
}

export default Cart;
