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
    this.getProfile();
  },

  updated() {
    this.getUserInfo()
    this.getProfile();
  },

  methods:{
    getProfile(){
      let id = localStorage.getItem('user_id')
      api.get(`http://127.0.0.1:8000/api/client/profile/${id}/`)
          .then(res => {
            localStorage.setItem('user', JSON.stringify(res.data.user_info));
            localStorage.setItem('user_id', JSON.stringify(res.data.user_info.id));
            console.log('user_info');
          })
          .catch(error => {
            console.log(error);
          })
    },
  },

  components: {MenuComponents, HeaderComponent, FooterComponent},
}
</script>

<style scoped>

</style>
