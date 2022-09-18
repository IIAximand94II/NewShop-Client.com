<template>
  <div>
    <!-- Header -->
    <HeaderComponent></HeaderComponent>
    <!-- End Top Header Bar -->

    <!-- Menu Section -->
    <MenuComponents></MenuComponents>

    <!-- View -->
    <router-view></router-view>

    <!-- Footer -->
    <FooterComponent></FooterComponent>
  </div>

</template>

<script>
import FooterComponent from "./views/layouts/FooterComponent.vue";
import HeaderComponent from "./views/layouts/HeaderComponent.vue";
import MenuComponents from "./views/layouts/MenuComponents.vue";
import api from "./api";
export default {
  name: "App",

  mounted() {
    $(document).trigger('load')
  },

  updated() {
    this.getUserInfo()
  },

  methods:{

  },

  components: {MenuComponents, HeaderComponent, FooterComponent},
}
</script>

<style scoped>

</style>
