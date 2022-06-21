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
        <li
          v-for="(upgrade, index) in upgrades"
          :key="index"
          class="upgrades__container-list-item"
        >
          <button
            @click="buy(upgrade.id)"
            :disabled="upgrade.cost > money"
            class="upgrades__container-list-item-button"
          >
            <div class="upgrades__container-list-item-button-left">
              <span class="upgrades__container-list-item-button-left-bonus"
                >+{{ upgrade.value }}$ / 1s</span
              >
            </div>
            <div class="upgrades__container-list-item-button-right">
              <span class="upgrades__container-list-item-button-right-name">{{
                upgrade.title
              }}</span>
              <span class="upgrades__container-list-item-button-right-cost"
                >Cost: {{ upgrade.cost }}$</span
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
      this.$store.commit("Money/clearMoney");
    },
    buy(upgradeId) {
      let income = this.income;
      let money = this.money;
      let upgrade = this.upgrades.find((upg) => upg.id == upgradeId);

      income += upgrade.value;
      money -= upgrade.cost;

      this.$store.commit("Income/setIncome", income);
      this.$store.commit("Money/setMoney", money);
    },
  },
  computed: {
    money() {
      return this.$store.getters["Money/money"];
    },
    income() {
      return this.$store.getters["Income/income"];
    },
    upgrades() {
      return this.$store.getters["Upgrades/upgrades"];
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