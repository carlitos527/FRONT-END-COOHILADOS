<template>
    <v-app >
      <Header></Header>
      <router-view></router-view>
      <v-content></v-content>
      <Footer />
    </v-app>
</template>
<script>
import Header from "./pages/Header.vue";
import Footer from "./pages/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: unset;
  }
</style>
