<template>
  <section class="menu">
    <nav class="navbar navigation">
      <div class="container">
        <div class="navbar-header">
          <h2 class="menu-title">Main Menu</h2>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

        </div><!-- / .navbar-header -->

        <!-- Navbar Links -->
        <div id="navbar" class="navbar-collapse collapse text-center">
          <ul class="nav navbar-nav">

            <!-- Home -->
            <li class="dropdown ">
              <router-link :to="{name:'main.index'}">Home</router-link>
            </li><!-- / Home -->


            <!-- Shop -->
            <li class="dropdown ">
              <router-link :to="{name:'shop.index'}">Shop</router-link>
            </li>
            <!-- / Shop -->


            <!-- Personal -->
            <li class="dropdown dropdown-slide">
              <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                 role="button" aria-haspopup="true" aria-expanded="false">User <span
                  class="tf-ion-ios-arrow-down"></span></a>
              <ul class="dropdown-menu">
                <li>
                  <router-link v-if="isAuth" :to="{name:'user.personal'}">Personal</router-link>
                </li>
                <li>
                  <router-link v-if="!isAuth" :to="{ name:'user.signin' }">Registration</router-link>
                </li>
                <li>
                  <router-link v-if="!isAuth" :to="{ name:'user.login' }">Login</router-link>
                </li>
                <li v-if="isAuth">
                  <a @click.prevent="logout" href="#">Logout</a>
                </li>
              </ul>
            </li>
            <!-- /. Personal -->



            <!-- Blog -->
            <li class="dropdown dropdown-slide">
              <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                 role="button" aria-haspopup="true" aria-expanded="false">Blog <span
                  class="tf-ion-ios-arrow-down"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Blog Left Sidebar</a></li>
                <li><a href="#">Blog Right Sidebar</a></li>
                <li><a href="#">Blog Full Width</a></li>
                <li><a href="#">Blog 2 Columns</a></li>
                <li><a href="#">Blog Single</a></li>
              </ul>
            </li><!-- / Blog -->


            <li class="dropdown ">
              <router-link :to="{name:'main.about'}">About</router-link>
            </li><!-- / About -->

            <li class="dropdown ">
              <router-link :to="{name:'main.faq'}">FAQ</router-link>
            </li><!-- / FAQ -->

          </ul><!-- / .nav .navbar-nav -->

        </div>
        <!--/.navbar-collapse -->
      </div><!-- / .container -->
    </nav>
  </section>
</template>

<script>
import api from "../../api";
export default {
  name: "MenuComponents",

  data(){
    return{
      isAuth:null,
    }
  },

  mounted() {
    this.checkAuth()
  },

  updated() {
    this.checkAuth()
  },

  methods:{
    logout(){
      //console.log('Logout!');
      if(localStorage.getItem('user') && localStorage.getItem('access-token')){
        api.post('http://127.0.0.1:8000/api/auth/logout')
          .then(res => {
            localStorage.removeItem('user');
            localStorage.removeItem('access-token');
            this.$router.push({ name:'main.index' });
          })
          .catch(error => {
            console.log(error);
          })
      }
    },

    checkAuth(){
      if(localStorage.getItem('access-token') && localStorage.getItem('user')){
        this.isAuth = true;
      }
      this.$forceUpdate();
    },
  }
}
</script>

<style scoped>

</style>