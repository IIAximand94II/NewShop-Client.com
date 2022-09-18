<template>
  <!-- Breadcrumb -->
  <section class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content">
            <h1 class="page-name">Cart</h1>
            <ol class="breadcrumb">
              <li><router-link :to="{name:'main.index'}">Home</router-link></li>
              <li class="active">cart</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Cart -->
  <div class="page-wrapper">
    <div class="cart shopping">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div class="block">
              <div class="product-list">
                <form method="post">
                  <table class="table">
                    <thead>
                    <tr>
                      <th class="">Item Name</th>
                      <th class="">Color</th>
                      <th class="">Size</th>
                      <th class="">Quantity</th>
                      <th class="">Item Price</th>
                      <th class="">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="product in cartProducts">
                      <tr class="">
                        <td class="">
                          <div class="product-info">
                            <img width="80" :src="product.product_info.image" alt="" />
                            <a href="#!">{{ product.product_info.title }}</a>
                          </div>
                        </td>
                        <td>
                          <div :style="`width: 36px; height: 36px; background-color: ${product.product_info.color.hex}; border: none;`"></div>
                        </td>
                        <td class="text-center">
                          {{ product.product_info.size.size }}
                        </td>
                        <td>
                          {{ product.product_info.qty }}
                        </td>
                        <td class="">${{ product.product_info.total_price }}</td>
                        <td class="">
                          <a class="product-remove" @click.prevent="removeProduct(product)" href="#!">Remove</a>
                        </td>
                      </tr>
                    </template>

                    </tbody>
                  </table>
                  <router-link :to="{name:'checkout.index'}" class="btn btn-main pull-right">Checkout</router-link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexComponent",

  mounted() {
    this.getCartProducts()
  },

  data(){
    return{
      cartProducts:[],
    }
  },

  methods:{
    getCartProducts(){
      this.cartProducts = JSON.parse(localStorage.getItem('cart'));
      console.log(this.cartProducts);
    },

    removeProduct(product){
      let cart  = JSON.parse(localStorage.getItem('cart'));
      let id = cart.findIndex(elem => elem.product_id === product.product_id && elem.size_id === product.size_id);
      cart.splice(id, 1);
      localStorage.setItem('cart', JSON.stringify(cart))
      this.getCartProducts()
    }
  }
}
</script>

<style scoped>

</style>