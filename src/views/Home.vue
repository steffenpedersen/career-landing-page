<template>
  <div>
    <Header />
    <main>
      <Introduction />
      <AboutTop />
      <AboutBottom />
      <Video />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Introduction from "@/components/Introduction.vue";
import AboutTop from "@/components/AboutTop.vue";
import AboutBottom from "@/components/AboutBottom.vue";
import Video from "@/components/Video.vue";

export default {
  name: "Home",
  components: {
    Header,
    Introduction,
    AboutTop,
    AboutBottom,
    Video
  }
};
</script>
