<template>
  <span class="interval-container"></span>
</template>

<script>
export default {
  computed: {
    money() {
      return this.$store.getters["Money/money"];
    },
    income() {
      return this.$store.getters["Income/income"];
    },
  },
  created() {
    let vm = this;
    setInterval(function () {
      let money = vm.money;
      money += vm.income;
      vm.$store.commit("Money/setMoney", money);
    }, 1000);
  },
};
</script>