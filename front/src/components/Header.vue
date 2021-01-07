<template>
  <nav class="flex bg-gray-800 shadow-lg text-gray-100 p-5 min-w-full">
    <router-link class="flex-none p-2 mr-20" to="/">BigLogo</router-link>
    <div class="flex flex-grow">
        <router-link class="p-2 hover:underline" to="/catalog">Каталог</router-link>
        <router-link class="p-2 hover:underline" to="/about">About</router-link>
    </div>
    <span class="flex flex-none">
        <router-link class="p-2 hover:underline" to="/favorite">Избранное</router-link>
        <router-link class="p-2 hover:underline" to="/cart">Корзина</router-link>
    </span>
  </nav>
</template>
