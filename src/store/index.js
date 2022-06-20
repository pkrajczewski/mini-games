import Vue from "vue";
import Vuex from "vuex";
import NavigationLinks from "./modules/navigation-links-module";
import BrandLink from "./modules/brand-link-module";
import InfoLink from "./modules/info-link-module";
import Income from "./modules/income-module";

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
    InfoLink,
    Income,
  },
});
