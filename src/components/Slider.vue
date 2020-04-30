<template>
  <section class="c-slider">
    <h2 class="c-slider__heading">
      Arbejd med de
      <br />største brands
    </h2>
    <carousel :per-page="1" :mouse-drag="false">
      <slide>
        <div class="c-slider__content c-slider__content--first">
          <img src="../assets/images/grafikr_client_twttw.jpg" alt />
          <span class="c-slider__text">Then we take the world · Award winning management</span>
        </div>
      </slide>
      <slide>
        <div class="c-slider__content c-slider__content--second">
          <img src="../assets/images/grafikr_client_last.jpg" alt />
          <span class="c-slider__text">Läst · Big and bold e-commerce</span>
        </div>
      </slide>
      <slide>
        <div class="c-slider__content c-slider__content--third">
          <img src="../assets/images/grafikr_client_soyaconcept.jpg" alt />
          <span class="c-slider__text">Soyaconcept · Conversion focused webdesign</span>
        </div>
      </slide>
    </carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Slider",
  components: {
    Carousel,
    Slide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../css/components/slider.scss";
</style>
