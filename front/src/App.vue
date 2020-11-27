<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/">Главная страница</router-link> |
        <router-link to="/catalog">Каталог</router-link> |
        <router-link to="/about">О компании</router-link> |
        <router-link to="/basket">Корзина</router-link> |
        <router-link to="/favorites">Избранные</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
