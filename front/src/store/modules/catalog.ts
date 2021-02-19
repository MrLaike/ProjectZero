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
class Catalog extends VuexModule {
  private products: Array<Product> = [];

  private product: Product | undefined;

  @Action({ rawError: true })
  public async fetchProducts(): Promise<void> {
    let products: Array<Product>;
    const respons = await apolloClient.query({
      query: gql`
        query User {
          profile {
            id
          }
        }
      `,
      context: {
        type: 'auth',
      },
    });
    console.log(respons.data);
    if (this.products.length) {
      products = this.products;
    } else {
      const response = await apolloClient.query({
        query: gql`
          query Products {
            products {
              id,
              title,
              link,
              desc,
              image,
              price,
              currency
            }
          },
        `,
      });
      products = response.data.products;
    }

    this.context.commit('setProducts', products);
  }

  @Action({ rawError: true })
  public async fetchProduct(link: string): Promise<void> {
    let product: Product | undefined;
    if (this.products.length) {
      product = this.products.find((prod: Product) => prod.link === link);
    } else {
      const response = await apolloClient.query({
        query: gql`
          query Product($productLink: String!) {
            product(link: $productLink) {
              id,
              title,
              link,
              image,
              desc,
              price,
              currency
            }
          }
        `,
        variables: { productLink: link },
      });
      product = response.data.product;
    }

    this.context.commit('setProduct', product);
  }

  @Mutation
  private setProducts(payload: Array<Product>): void {
    this.products = payload;
  }

  @Mutation
  private setProduct(payload: Product): void {
    this.product = payload;
  }
}

export default Catalog;
