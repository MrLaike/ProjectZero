import {
  VuexModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import apolloClient from '@/graphql/apollo';
import gql from 'graphql-tag';
import { CatalogState, Product } from './types';

/* eslint class-methods-use-this: "off" */
@Module({
  namespaced: true,
  preserveState: true,
})
class Cart extends VuexModule {
  private cart: Array<number> = [];

  get productsInCart(): Array<Product> {
    return this.context.rootState.catalog.products.filter(
      (product: Product) => this.cart.includes(product.id),
    );
  }

  @Action({ rawError: true })
  public async addToCart(id: number) {
    this.context.commit('addCart', id);
  }

  @Action({ rawError: true })
  public async removeFromCart(id: number) {
    const index = this.cart.findIndex((product: Product) => product.id === id);
    this.context.commit('deleteCart', index);
  }

  @Mutation
  private addCart(payload: number): void {
    this.cart.push(payload);
  }

  @Mutation
  private deleteCart(payload: number) {
    this.cart.splice(payload, 1);
  }
}

export default Cart;
