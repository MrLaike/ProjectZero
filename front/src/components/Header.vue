<template>
  <div>
    <nav class="flex bg-gray-800 shadow-3xl-light
                text-gray-100 p-5 min-w-full items-center justify-between">
      <router-link class="flex-none p-2 mr-20" to="/">BigLogo</router-link>
      <div class="md:flex flex-grow sm:hidden">
          <router-link class="p-2 hover:underline" to="/catalog">Каталог</router-link>
          <router-link class="p-2 hover:underline" to="/about">About</router-link>
      </div>
      <div class="md:flex flex-wrap sm:hidden">
        <a class="w-full" href="tel:8983299123">8983299123</a>
        <a class="w-full" href="mailto:heri.ter@gmer.ru">heri.ter@gmer.ru</a>
      </div>
      <span class="flex flex-none items-center">
        <div class="sm:block md:hidden w-8 p-1 h-4"
            :class="burgerIsOpen"
            @click="openBurger">
          <span class="burger" ></span>
        </div>
          <router-link class="py-2" to="/favorite">
            <span class="rounded-xl p-3">
              <Icon name="heart" scale="1.3" class="hover:text-red-700" />
            </span>
          </router-link>
          <router-link class="py-2" to="/cart">
            <span class="rounded-xl bg-gray-200 p-3 hover:shadow-3xl-light relative">
              <span class="rounded-xl px-2 py-1 text-xs bg-red-500 absolute -top-2 -right-2">
                {{ productsInCart.length }}
              </span>
              <Icon name="shopping-cart" scale="1.2" class="text-gray-700 " />
            </span>
          </router-link>
      </span>
    </nav>
    <nav class="sm:flex md:hidden w-screen absolute bg-gray-800 text-gray-100 z-10"
         :class="(!burgerIsOpen) ? 'sm:hidden' : ''">
      <div class="md:flex flex-grow">
          <router-link class="p-2 hover:underline" to="/catalog">Каталог</router-link>
          <router-link class="p-2 hover:underline" to="/about">About</router-link>
      </div>
      <div class="md:flex flex-wrap">
        <a class="w-full" href="tel:8983299123">8983299123</a>
        <a class="w-full" href="mailto:heri.ter@gmer.ru">heri.ter@gmer.ru</a>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const cart = namespace('cart');

@Component
export default class Header extends Vue {
  @cart.Getter
  private productsInCart: Array<number> | undefined;

  private burgerIsOpen = '';

  private openBurger(): void {
    this.burgerIsOpen = (!this.burgerIsOpen) ? 'open' : '';
  }
}
</script>
