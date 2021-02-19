<template>
  <div class="bg-gray-900 w-full text-white mt-20">
    <div class="flex py-4 px-5">
      <nav class="flex flex-wrap flex-none w-60">
        <router-link to="/" class="p-2 ml-2 w-full">О компании</router-link>
        <router-link to="/" class="p-2 ml-2 w-full">Каталог</router-link>
        <router-link to="/" class="p-2 ml-2 w-full">Обратная связь</router-link>
        <router-link to="/" class="p-2 ml-2 w-full">Доставка</router-link>
      </nav>
      <nav class="flex flex-wrap flex-shirink content-start">
        <router-link to="/" class="p-2 ml-2 w-full">О компании</router-link>
        <router-link to="/" class="p-2 ml-2 w-full">Каталог</router-link>
        <router-link to="/" class="p-2 ml-2 w-full">Обратная связь</router-link>
      </nav>
      <div>
      <div class="flex flex-wrap">
        <span class="w-full">Мы в соцсетях</span>
        <SocialNetworks v-for="(social) in socials"
                        :key="social.id"
                        :social="social" />
      </div>
      </div>
    </div>
    <div class="text-center p-3 bg-gray-800"> Copyright</div>
  </div>
</template>

<script lang="ts">
import SocialNetworks from '@/components/SocialNetwork.vue';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const main = namespace('main');

@Component({
  components: {
    SocialNetworks,
  },
})
export default class Footer extends Vue {
  @main.Getter('getSocial')
  public socials;

  mounted() {
    console.log(this.socials);
  }
}
</script>
