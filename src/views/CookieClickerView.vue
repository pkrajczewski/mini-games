<template>
  <main ontouchstart>
    <section class="cookie-clicker">
      <Cookie />
      <Upgrades />
    </section>
  </main>
</template>

<script>
import Cookie from "@/components/cookie-clicker/cookie";
import Upgrades from "@/components/cookie-clicker/upgrades";

export default {
  components: {
    Cookie,
    Upgrades,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/cookie-clicker/cookie-clicker.scss";
</style>