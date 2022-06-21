export default {
  namespaced: true,
  state: {
    money: 0,
  },
  mutations: {
    setMoney(state, payload) {
      state.money = payload;
      localStorage.setItem("money", payload);
    },
    clearMoney(state) {
      state.money = 0;
      localStorage.setItem("money", 0);
    },
  },
  getters: {
    money(state) {
      return state.money;
    },
  },
  actions: {
    fetchMoneyFromLocalStorage({ commit }) {
      let money = localStorage.getItem("money");
      money = JSON.parse(money);
      if (!money) return;
      commit("setMoney", JSON.parse(money));
    },
  },
};
