<template>
  <li class="dropdown cart-nav dropdown-slide">
    <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
        class="tf-ion-android-cart"></i>Cart</a>
    <div class="dropdown-menu cart-dropdown">

      <!-- Cart Item -->
      <template v-for="product in cartProducts">
        <div class="media">
          <a class="pull-left" href="#!">
            <img class="media-object" :src="product.product_info.image" alt="image" />
          </a>
          <div class="media-body">
            <h4 class="media-heading"><a href="#!">{{ product.product_info.title }}</a></h4>
            <div class="cart-price">
              <span>{{ product.qty }} x</span>
              <span>{{ product.price }}</span>
            </div>
            <h5><strong>${{ product.total }}</strong></h5>
          </div>
          <a href="#!" @click.prevent="removeProduct(product)" class="remove"><i class="tf-ion-close"></i></a>
        </div>
      </template>

      <!-- / Cart Item -->


      <div class="cart-summary">
        <span>Total</span>
        <span class="total-price">${{ cartSum }}</span>
      </div>
      <ul class="text-center cart-buttons">
        <li><router-link :to="{ name:'cart.index' }" class="btn btn-small">View Cart</router-link></li>
        <li><router-link :to="{ name:'checkout.index' }" class="btn btn-small btn-solid-border">Checkout</router-link></li>
      </ul>
    </div>

  </li>
</template>

<script>
export default {
  name: "CartComponent",

  mounted() {
    this.getCartProducts()
  },

  data(){
    return{
      cartProducts:[],
      cartSum:null,
    }
  },

  computed:{
    // getTotal(){
    //   // this.cartProducts.forEach(elem => {
    //   //   this.cartSum += elem.total_price;
    //   // })
    // }
  },

  methods:{
    getCartProducts(){
      this.cartProducts = JSON.parse(localStorage.getItem('cart'));
      // this.cartProducts.forEach(elem => {
      //   this.cartSum += elem.total_price;
      // })
      console.log(this.cartSum)
    },

    removeProduct(product){
      let cart  = JSON.parse(localStorage.getItem('cart'));
      let id = cart.findIndex(elem => elem.product_id === product.product_id && elem.size_id === product.size_id);
      cart.splice(id, 1);
      localStorage.setItem('cart', JSON.stringify(cart))
      this.getCartProducts()
    }

  },


}
</script>

<style scoped>

</style>