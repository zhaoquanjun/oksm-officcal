<template>
  <div id="app">
    <header-area></header-area>
    <router-view></router-view>
    <footer-area></footer-area>
  </div>
</template>

<script>
import HeaderArea from "@c/header";
import FooterArea from "@c/footer";
export default {
  name: "App",
  components: {
    HeaderArea,
    FooterArea,
  },
};
</script>
