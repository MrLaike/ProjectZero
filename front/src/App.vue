<template>
  <div id="app">
    <nav class="p-5 min-w-full">
      <router-link class="p-2 mr-20" to="/">BigLogo</router-link>
      <router-link class="p-2 hover:bg-green-400" to="/about">About</router-link>
      <router-link class="p-2 hover:bg-green-400" to="/catalog">Каталог</router-link>
    </nav>
    <router-view/>
  </div>
</template>
