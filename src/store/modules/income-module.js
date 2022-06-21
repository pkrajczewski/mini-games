export default {
  namespaced: true,
  state: {
    income: 0.0,
  },
  mutations: {
    setIncome(state, payload) {
      state.income = payload;
      localStorage.setItem("income", payload);
    },
    clearIncome(state) {
      state.income = 0;
      localStorage.setItem("income", 0);
    },
  },
  getters: {
    income(state) {
      return state.income;
    },
  },
  actions: {
    fetchIncomeFromLocalStorage({ commit }) {
      let income = localStorage.getItem("income");
      income = JSON.parse(income);
      if (!income) return;
      commit("setIncome", JSON.parse(income));
    },
  },
};
