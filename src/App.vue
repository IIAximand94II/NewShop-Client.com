<template>
  <div>
    <!-- Start Top Header Bar -->
    <HeaderComponent></HeaderComponent>
    <!-- End Top Header Bar -->

    <!-- Main Menu Section -->
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
              <li class="dropdown ">
                <router-link :to="{name:'personal.index'}">Personal</router-link>
              </li>
              <!-- / Personal -->



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

    <!-- пока не удалять -->


    <router-view></router-view>

    <FooterComponent></FooterComponent>
  </div>

</template>

<script>
import FooterComponent from "./views/layouts/FooterComponent.vue";
import HeaderComponent from "./views/layouts/HeaderComponent.vue";
export default {
  name: "App",

  mounted() {
   $(document).trigger('load')
  },

  components: {HeaderComponent, FooterComponent},
}
</script>

<style scoped>

</style>
