<template>
  <div class="cookie">
    <div class="cookie__text">
      <h2 class="cookie__text-title">Money per second:</h2>
      <h1 class="cookie__text-income">{{ income.toFixed(2) }} $</h1>
    </div>
    <button @click="incrementMoney" class="cookie__button">
      <img
        src="@/assets/img/cookie-clicker/cookie.png"
        alt=""
        class="cookie__button-image"
        height="200"
      />
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    income() {
      return this.$store.getters["Income/income"];
    },
  },
  methods: {
    incrementMoney() {
      let money = this.$store.getters["Money/money"] + 1;
      this.$store.commit("Money/setMoney", money);
      this.$emit("money", money);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/cookie-clicker/_cookie.scss";
</style>