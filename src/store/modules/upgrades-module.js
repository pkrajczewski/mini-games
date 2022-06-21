export default {
  namespaced: true,
  state: {
    upgrades: [
      {
        id: 1,
        title: "BAKING STUDENT",
        cost: 10,
        value: 0.1,
      },
      {
        id: 2,
        title: "BAKERY CHIEF",
        cost: 200,
        value: 2,
      },
      {
        id: 3,
        title: "OVEN",
        cost: 3000,
        value: 25,
      },
      {
        id: 4,
        title: "BAKERY",
        cost: 1000000,
        value: 125,
      },
      {
        id: 5,
        title: "COOKIES FACTORY",
        cost: 5000000,
        value: 1000,
      },
    ],
  },
  mutations: {},
  getters: {
    upgrades(state) {
      return state.upgrades;
    },
  },
  actions: {},
};
