<template>
  <section class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xs-12 col-sm-4">
          <div class="contact-number">
            <i class="tf-ion-ios-telephone"></i>
            <span>0129- 12323-123123</span>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-4">
          <!-- Site Logo -->
          <div class="logo text-center">
            <a href="/">
              <!-- replace logo here -->
              <svg width="155px" height="39px" viewBox="0 0 155 29" version="1.1" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-size="40"
                   font-family="AustinBold, Austin" font-weight="bold">
                  <g id="Group" transform="translate(-108.000000, -297.000000)" fill="#000000">
                    <text id="newhop">
                      <tspan x="105.94" y="325" style="padding: 4px">NewShop</tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 col-sm-4">

          <ul class="top-menu text-right list-inline">

            <!-- Cart -->
            <CartComponent></CartComponent>
            <!-- / Cart -->

            <!-- Search -->
            <li class="dropdown search dropdown-slide">
              <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                  class="tf-ion-ios-search-strong"></i> Search</a>
              <ul class="dropdown-menu search-dropdown">
                <li>
                  <form action="post"><input type="search" class="form-control" placeholder="Search..."></form>
                </li>
              </ul>
            </li><!-- / Search -->

            <!-- Languages -->
            <li class="commonSelect">
              <select class="form-control">
                <option>EN</option>
                <option>DE</option>
                <option>FR</option>
                <option>ES</option>
              </select>
            </li><!-- / Languages -->

          </ul>
          <!-- / .nav .navbar-nav .navbar-right -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CartComponent from "../../components/CartComponent.vue";
export default {
  name: "HeaderComponent",

  components: {CartComponent}
}
</script>

<style scoped>

</style>