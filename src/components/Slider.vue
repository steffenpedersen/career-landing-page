<template>
  <section class="c-slider">
    <h2 class="c-slider__heading" data-aos="fade-in">
      Arbejd med de
      <br />største brands
    </h2>
    <carousel :per-page="1" :mouse-drag="false">
      <slide>
        <div class="c-slider__content c-slider__content--twttw">
          <span class="c-slider__text">Then we take the world · Award winning management</span>
        </div>
      </slide>
      <slide>
        <div class="c-slider__content c-slider__content--last">
          <span class="c-slider__text">Läst · Big and bold e-commerce</span>
        </div>
      </slide>
      <slide>
        <div class="c-slider__content c-slider__content--soyaconcept">
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
