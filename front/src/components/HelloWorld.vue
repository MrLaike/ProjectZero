<template>
  <div class="flex justify-center">
    <h1 class="font-bold text-3xl">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop()
  private msg!: string;
}
</script>
