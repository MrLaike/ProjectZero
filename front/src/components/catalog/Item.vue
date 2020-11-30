<template>
  <div class="item">
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.currency}}</p>
  </div>
</template>

<script lang="ts">
import { Product } from '@/store/catalog/types';
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class Item extends Vue {
  @Prop()
  product: Product | undefined;
}
</script>
