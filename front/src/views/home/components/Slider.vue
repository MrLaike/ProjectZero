<template>
  <Swiper :options="setting">
    <SwiperSlide v-for="(slide) in slides" :key="slide.id"
                 class="text-gray-100 text-2xl font-bold">
      <div class="h-screen w-full flex justify-center
                  bg-cover bg-center bg-no-repeat
                  items-center bg-placeholder"
           :style="`background-image: url(${slide.url});`">
          <div class="z-10">{{ slide.data }}</div>
      </div>
    </SwiperSlide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </Swiper>
</template>

<script lang="ts">
import {
  Swiper,
  SwiperSlide,
} from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    SwiperSlide,
    Swiper,
  },
})
export default class Slider extends Vue {
  private setting = {
    effect: 'fade',
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  public slides = [
    {
      id: 1,
      data: 'Long text',
      url: 'https://picsum.photos/900/1200',
    },
    {
      id: 2,
      data: 'Very Long text',
      url: 'https://picsum.photos/1200/1600',
    },
  ];
}
</script>
