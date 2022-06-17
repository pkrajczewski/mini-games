import Vue from "vue";
import Vuex from "vuex";
import NavigationLinks from "./modules/navigation-links-module";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    NavigationLinks,
  },
});
