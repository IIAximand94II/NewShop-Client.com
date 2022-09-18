<template>
  <!-- Breadcrumb -->
  <section class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content">
            <h1 class="page-name">Checkout</h1>
            <ol class="breadcrumb">
              <li><router-link :to="{name:'main.index'}">Home</router-link></li>
              <li class="active">checkout</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Checkout -->
  <div class="page-wrapper">
    <div class="checkout shopping">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="block billing-details">
              <h4 class="widget-title">Billing Details</h4>
              <form class="checkout-form">
                <div class="form-group">
                  <label for="full_name">Full Name</label>
                  <input type="text" class="form-control" v-model="name" id="full_name" placeholder="">
                </div>
                <div class="form-group">
                  <label for="full_name">Address</label>
                  <select @change.prevent="changeAddress($event)" class="form-control" id="user_address">
                    <template v-for="address in addresses">
                      <option  :value="address.id">street {{ address.street }}, house {{ address.house }}, flat {{ address.flat }}</option>
                    </template>
                  </select>
                </div>
                <div class="checkout-country-code clearfix">
                  <div class="form-group">
                    <label for="user_post_code">Zip Code</label>
                    <input type="text" class="form-control" id="user_post_code" v-model="zip" name="zipcode">
                  </div>
                  <div class="form-group" >
                    <label for="user_city">City</label>
                    <input type="text" class="form-control" id="user_city" v-model="city" name="city">
                  </div>
                </div>
                <div class="form-group">
                  <label for="user_country">Country</label>
                  <input type="text" class="form-control" id="user_country" v-model="country" placeholder="">
                </div>
              </form>
            </div>

            <!-- Payment -->
            <div class="block">
              <h4 class="widget-title">Payment Method</h4>
              <p>Credit Cart Details (Secure payment)</p>
              <div class="checkout-product-details">
                <div class="payment">
                  <div class="card-details">
                    <form  class="checkout-form">
                      <div class="form-group">
                        <label for="card-number">Card Number <span class="required">*</span></label>
                        <input  id="card-number" class="form-control"   type="tel" placeholder="•••• •••• •••• ••••">
                      </div>
                      <div class="form-group half-width padding-right">
                        <label for="card-expiry">Expiry (MM/YY) <span class="required">*</span></label>
                        <input id="card-expiry" class="form-control" type="tel" placeholder="MM / YY">
                      </div>
                      <div class="form-group half-width padding-left">
                        <label for="card-cvc">Card Code <span class="required">*</span></label>
                        <input id="card-cvc" class="form-control"  type="tel" maxlength="4" placeholder="CVC" >
                      </div>
                      <a href="#" class="btn btn-main mt-20">Place Order</a >
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Payment -->

          </div>
          <div class="col-md-4">
            <div class="product-checkout-details">
              <div class="block">
                <h4 class="widget-title">Order Summary</h4>

                <!-- Cart -->
                <template v-for="product in cartProducts">
                  <div class="media product-card">
                    <a class="pull-left" href="#">
                      <img class="media-object" :src="product.product_info.image" alt="Image" />
                    </a>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">{{ product.product_info.title+', '+product.product_info.color.title }}</a></h4>
                      <p class="price">{{ product.product_info.qty }} x ${{ product.product_info.total_price }}</p>
                      <span class="remove" @click.prevent="removeProduct(product)">Remove</span>
                    </div>
                  </div>
                </template>
                <!-- End Cart -->


                <div class="discount-code">
                  <p>Have a discount ? <a data-toggle="modal" data-target="#coupon-modal" href="#!">enter it here</a></p>
                </div>
                <ul class="summary-prices">
                  <li>
                    <span>Subtotal:</span>
                    <span class="price">$190</span>
                  </li>
                  <li>
                    <span>Shipping:</span>
                    <span>Free</span>
                  </li>
                </ul>
                <div class="summary-total">
                  <span>Total</span>
                  <span>$250</span>
                </div>
                <div class="verified-icon">
                  <img src="../../assets/images/shop/verified.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="coupon-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <form>
            <div class="form-group">
              <input class="form-control" type="text" placeholder="Enter Coupon Code">
            </div>
            <button type="submit" class="btn btn-main">Apply Coupon</button>
          </form>
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
    this.getUserInfo()
  },

  data(){
    return{
      cartProducts:[],


      // user
      user: [],
      addresses:[],
      currentAddress:[],
      name:null,
      address:null,
      zip:null,
      city:null,
      country:null,
    }
  },

  methods:{
    getCartProducts(){
      this.cartProducts = JSON.parse(localStorage.getItem('cart'));
      console.log(this.cartProducts)
      // this.cartProducts.forEach(elem => {
      //   this.cartSum += elem.total_price;
      // })
    },

    getUserInfo(){
      if(localStorage.getItem('user')){
        this.$store.dispatch('getUserProfile')
        this.user = JSON.parse(localStorage.getItem('user'));
        this.name = this.user.full_name
        this.addresses = this.user.addresses;

        // address
        this.currentAddress = this.addresses[0];
        this.zip = this.currentAddress.zip
        this.city = this.currentAddress.city
        this.country = this.currentAddress.country
        console.log(this.currentAddress)
      }else{
        console.log('user not register')
      }
    },

    changeAddress(event){
      let id = event.target.value
      this.currentAddress = this.addresses.filter(elem => elem.id == id);
      this.zip = this.currentAddress[0].zip
      this.city = this.currentAddress[0].city
      this.country = this.currentAddress[0].country
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