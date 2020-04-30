<template>
  <section class="c-video">
    <h2 class="c-video__title">
      Working at
      <br />Grafikr was
      <br />great
    </h2>
    <video autoplay muted loop class="c-video__content">
      <source src="../assets/video/grafikr_maxim_loop.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<script>
export default {
  name: "Video"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../css/components/video.scss";
</style>
