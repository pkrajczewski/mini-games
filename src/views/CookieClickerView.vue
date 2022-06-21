<template>
  <main ontouchstart>
    <section class="cookie-clicker">
      <Cookie />
      <Upgrades />
      <Interval />
    </section>
  </main>
</template>

<script>
import Cookie from "@/components/cookie-clicker/cookie";
import Upgrades from "@/components/cookie-clicker/upgrades";
import Interval from "@/components/interval-container/interval-container";

export default {
  components: {
    Cookie,
    Upgrades,
    Interval,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/cookie-clicker/cookie-clicker.scss";
</style>