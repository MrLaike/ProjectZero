<template>
  <div>
    {{ product.title }}
    {{ product.quantity }}
    {{ product.price * product.quantity}}
  </div>
</template>

<script lang="ts">
import { Product } from '@/store/modules/types';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
  @Prop()
  readonly product: Product | undefined;
}
</script>
