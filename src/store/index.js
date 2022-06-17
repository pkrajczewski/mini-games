import Vue from "vue";
import Vuex from "vuex";
import NavigationLinks from "./modules/navigation-links-module";
import BrandLink from "./modules/brand-link-module";

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
    BrandLink,
  },
});
