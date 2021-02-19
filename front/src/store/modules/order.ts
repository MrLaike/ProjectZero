import {
  VuexModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import apolloClient from '@/graphql/apollo';
import { addOrder } from '@/graphql/queries';
import gql from 'graphql-tag';

/* eslint class-methods-use-this: "off" */
@Module({
  namespaced: true,
  preserveState: true,
})
class Order extends VuexModule {
  protected orders = [] // add type for order

  @Action({ rawError: true })
  public async addOrder(data): Promise<any> {
    const response = await apolloClient.mutate({
      mutation: addOrder,
      variables: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        totalPrice: data.totalPrice,
        products: data.products,
      },
    });
    return response.data;
  }
}

export default Order;
