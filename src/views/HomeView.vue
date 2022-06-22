<template>
  <div class="hello">
    <h1 class="hello__title">
      Hello there! <br />
      This page is under construction, but You can visit Cookie Clicker game!
      <br />
      It is ready to play.
    </h1>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>

<style lang="scss">
.hello {
  width: 75%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 1.2rem;
    font-size: clamp(1.2rem, 0.8926829268292682rem + 1.75609756097561vw, 3rem);
    line-height: normal;
    font-weight: 700;
  }
}
</style>