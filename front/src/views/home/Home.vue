<template>
  <div class="home">
    <Slider/>
    <CatalogSlider title="Bestseller"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CatalogSlider from '@/views/home/components/CatalogSlider.vue';
import Slider from '@/views/home/components/Slider.vue';

@Component({
  components: {
    CatalogSlider,
    Slider,
  },
})
export default class Home extends Vue {}
</script>
