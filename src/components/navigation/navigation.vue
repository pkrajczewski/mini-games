<template>
  <header>
    <nav class="navigation">
      <router-link
        class="navigation__brand"
        :key="`router-link-${brandLink.name}`"
        :to="{ name: brandLink.name }"
      >
        <span class="navigation__brand-text">
          {{ brandLink.title }}
        </span>
        <span class="navigation__brand-icon" v-html="`${brandLink.svg}`"></span>
        <div class="navigation__brand-line"></div>
      </router-link>
      <div class="navigation__wrapper">
        <template v-for="link in navigationLinks">
          <router-link
            class="navigation__wrapper-link"
            :key="`router-link-${link.name}`"
            :to="{ name: link.name }"
            active-link="active"
          >
            <span
              class="navigation__wrapper-link-icon"
              v-html="`${link.svg}`"
            ></span>
            <span class="navigation__wrapper-link-text">
              {{ link.title }}
            </span>
          </router-link>
        </template>
      </div>
      <router-link
        class="navigation__info"
        :key="`router-link-${infoLink.name}`"
        :to="{ name: infoLink.name }"
      >
        <div class="navigation__info-line"></div>
        <span class="navigation__info-icon" v-html="`${infoLink.svg}`"></span>
        <span class="navigation__info-text">
          {{ infoLink.title }}
        </span>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    navigationLinks() {
      return this.$store.getters["NavigationLinks/navigationLinks"];
    },
    brandLink() {
      return this.$store.getters["BrandLink/brandLink"];
    },
    infoLink() {
      return this.$store.getters["InfoLink/infoLink"];
    },
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/components/_navigation.scss";
</style>