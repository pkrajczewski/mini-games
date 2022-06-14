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
</script>

<style lang="scss">
@import "@/assets/scss/vendors/bootstrap-vue/styles.scss";
</style>
