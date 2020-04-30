<template>
  <section class="c-introduction">
    <header class="c-header">
      <img class="c-header__logo" src="../assets/svg/grafikr_logo.svg" alt />
    </header>
    <div class="c-introduction__wrap">
      <img class="c-introduction__circle" src="../assets/svg/grafikr_circle.svg" alt />
      <h1 class="c-introduction__title">Prisvindende e-commerce bureau</h1>
    </div>
    <img class="c-introduction__image-meeting" src="../assets/images/grafikr_meeting.jpg" alt />
  </section>
</template>

<script>
export default {
  name: "Introduction"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../css/components/header.scss";
@import "../css/components/introduction.scss";
</style>
