<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/navigation/navigation";

export default {
  components: {
    Navigation,
  },
};
</script>pt

<style lang="scss">
@import "@/assets/scss/helpers/global";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
