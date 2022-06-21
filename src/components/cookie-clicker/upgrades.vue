<template>
  <div class="upgrades">
    <div class="upgrades__money">
      <h2 class="upgrades__money-title">Money:</h2>
      <h2 class="upgrades__money-amount">{{ money.toFixed(1) }}$</h2>
      <button @click="clearMoney" class="upgrades__money-clear">
        Donate money to charity
      </button>
    </div>
    <div class="upgrades__container">
      <div class="upgrades__container-title">Upgrades:</div>
      <ul class="upgrades__container-list">
        <li class="upgrades__container-list-item">
          <button class="upgrades__container-list-item-button">
            <div class="upgrades__container-list-item-button-left">
              <span class="upgrades__container-list-item-button-left-bonus"
                >+0.1$ / 1s</span
              >
            </div>
            <div class="upgrades__container-list-item-button-right">
              <span class="upgrades__container-list-item-button-right-name"
                >BAKING STUDENT</span
              >
              <span class="upgrades__container-list-item-button-right-cost"
                >Cost: 10$</span
              >
            </div>
          </button>
        </li>
        <li class="upgrades__container-list-item">
          <button class="upgrades__container-list-item-button">
            <div class="upgrades__container-list-item-button-left">
              <span class="upgrades__container-list-item-button-left-bonus"
                >+2$ / 1s</span
              >
            </div>
            <div class="upgrades__container-list-item-button-right">
              <span class="upgrades__container-list-item-button-right-name"
                >BAKERY CHIEF</span
              >
              <span class="upgrades__container-list-item-button-right-cost"
                >Cost: 200$</span
              >
            </div>
          </button>
        </li>
        <li class="upgrades__container-list-item">
          <button class="upgrades__container-list-item-button">
            <div class="upgrades__container-list-item-button-left">
              <span class="upgrades__container-list-item-button-left-bonus"
                >+25$ / 1s</span
              >
            </div>
            <div class="upgrades__container-list-item-button-right">
              <span class="upgrades__container-list-item-button-right-name"
                >OVEN</span
              >
              <span class="upgrades__container-list-item-button-right-cost"
                >Cost: 3000$</span
              >
            </div>
          </button>
        </li>
        <li class="upgrades__container-list-item">
          <button class="upgrades__container-list-item-button">
            <div class="upgrades__container-list-item-button-left">
              <span class="upgrades__container-list-item-button-left-bonus"
                >+125$ / 1s</span
              >
            </div>
            <div class="upgrades__container-list-item-button-right">
              <span class="upgrades__container-list-item-button-right-name"
                >BAKERY</span
              >
              <span class="upgrades__container-list-item-button-right-cost"
                >Cost: 5000000$</span
              >
            </div>
          </button>
        </li>
        <li class="upgrades__container-list-item">
          <button class="upgrades__container-list-item-button">
            <div class="upgrades__container-list-item-button-left">
              <span class="upgrades__container-list-item-button-left-bonus"
                >+1000$ / 1s</span
              >
            </div>
            <div class="upgrades__container-list-item-button-right">
              <span class="upgrades__container-list-item-button-right-name"
                >COOKIES FACTORY</span
              >
              <span class="upgrades__container-list-item-button-right-cost"
                >Cost: 5000000$</span
              >
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clearMoney() {
      this.$store.commit("clearMoney");
    },
  },
  computed: {
    money() {
      return this.$store.getters["Money/money"];
    },
    income() {
      return this.$store.getters["Income/income"];
    },
  },
  created() {
    this.$store.dispatch("Money/fetchMoneyFromLocalStorage");
    this.$store.dispatch("Income/fetchIncomeFromLocalStorage");
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/cookie-clicker/_upgrades.scss";
</style>