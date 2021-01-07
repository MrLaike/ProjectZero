<template>
  <div class="home">
    <Slider/>
    <HelloWorld msg="Главная страница"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/views/home/components/HelloWorld.vue';
import Slider from '@/views/home/components/Slider.vue';

@Component({
  components: {
    HelloWorld,
    Slider,
  },
})
export default class Home extends Vue {}
</script>
