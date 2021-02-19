<template>
  <div class="flex flex-wrap text-center justify-center">
    <h1 class="font-bold w-full text-3xl m-5">{{ title }}</h1>
    <Swiper :options="setting" class="w-full">
      <SwiperSlide v-for="item in items" :key="item.id">
        <div class="h-96 bg-gray-300">{{ item.title }}</div>
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script lang="ts">
import 'swiper/swiper-bundle.css';
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  Swiper,
  SwiperSlide,
} from 'vue-awesome-swiper';

@Component({
  components: {
    SwiperSlide,
    Swiper,
  },
})
export default class HelloWorld extends Vue {
  @Prop()
  private title!: string;

  private items = [
    {
      id: 1,
      title: 'Product1',
    },
    {
      id: 2,
      title: 'Product2',
    },
    {
      id: 3,
      title: 'Product3',
    },
    {
      id: 4,
      title: 'Product4',
    },
    {
      id: 4,
      title: 'Product4',
    },
  ];

  private setting = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
  };
}
</script>
