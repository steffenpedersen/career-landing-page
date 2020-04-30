<template>
  <div>
    <Header />
    <main>
      <Introduction />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Introduction from "@/components/Introduction.vue";

export default {
  name: "Home",
  components: {
    Header,
    Introduction
  }
};
</script>
