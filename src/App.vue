<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
window.document.documentElement.setAttribute("data-theme", "light")
const changeTheme = (theme: string) => {
  window.document.documentElement.setAttribute("data-theme", theme)
}
</script>

<template>
<div class="content">
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button @click="changeTheme('dark')" class="my-btn">dark</button>
  <button @click="changeTheme('light')" class="my-btn">light</button>
  <HelloWorld msg="Vite + Vue" />
</div>
</template>

<style scoped lang="scss">
.content{
  @include background_color("background_color1");
  .my-btn{
    @include background_color("background_color1");
    @include font_color("font_color1");
    border: 1px solid;
    @include border_color("border_color1")
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
