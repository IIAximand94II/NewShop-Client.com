<template>
    <section class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content">
            <h1 class="page-name">Dashboard</h1>
            <ol class="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li class="active">my account</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

    <section class="user-dashboard page-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <!-- buttons -->
          <ul class="list-inline dashboard-menu text-center">
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#profile" aria-expanded="false" aria-hidden="false" aria-controls="profile">Profile</a></li>
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#orders" aria-expanded="false" aria-hidden="true" aria-controls="orders">Orders</a></li>
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#address" aria-expanded="false" aria-hidden="true" aria-controls="address">Address</a></li>
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#wishlist" aria-expanded="false" aria-hidden="true" aria-controls="wishlist">Wishlist</a></li>
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#comment" aria-expanded="false" aria-hidden="true" aria-controls="comment">Comments and review</a></li>
          </ul>

          <!-- Profile Details -->
          <div class="dashboard-wrapper dashboard-user-profile" id="profile">
            <div class="media">
              <div class="pull-left text-center" href="#!">
                <img class="media-object user-img" src="src/assets/images/avater.jpg" alt="Image">
                <a href="#x" class="btn btn-transparent mt-20">Change Image</a>
              </div>
              <div class="media-body">
                <ul class="user-profile-list">
                  <li><span>Full Name:</span>{{ user.full_name }}</li>
                  <li><span>Email:</span>{{ user.email }}</li>
                  <li><span>Phone:</span>{{ user.phone }}</li>
                  <li><span>Date of Birth:</span>{{ user.birth_date }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Orders -->
          <div class="dashboard-wrapper user-dashboard collapse" id="orders">
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <template v-for="order in orders">
                  <tr>
                    <td>#{{ order.id }}</td>
                    <td>{{ order.date }}</td>
                    <td>{{ order.qty }}</td>
                    <td>${{ order.total }}</td>
                    <td><span :class="`label label-${formatStatusColor(order.status)}`">{{ formatStatus(order.status) }}</span></td>
                    <td>
                      <a class="btn btn-default" data-toggle="collapse" data-target="#order-1" aria-expanded="false" aria-hidden="true" aria-controls="order-1">View</a>

                    </td>
                    <td>
                      <button @click.prevent="orderCanseled(order.id)" v-if="order.status!==4" class="btn btn-danger">Canceled</button>
                    </td>
                  </tr>

                  <!-- order products -->

                      <tr class="collapse" id="order-1">
                        <td colspan="7">
                          <table class="table table-responsive">
                            <tr>
                              <th>title</th>
                              <th>image</th>
                              <th>color</th>
                              <th>size</th>
                              <th>price</th>
                              <th>qty</th>
                              <th>total</th>
                            </tr>
                            <tr style="margin-top: 4px" v-for="product in order.products">
                              <td>{{ product.product_info.title }}</td>
                              <td><img :src="product.product_info.preview_image" width="80" height="80"></td>
                              <td><div :style="`width: 26px; height: 26px; background-color: ${product.product_info.color.hex}; border: none; margin-right: 3px`"></div></td>
                              <td>{{ product.size.size }}</td>
                              <td>{{ product.price }}</td>
                              <td>{{ product.qty }}</td>
                              <td>{{ product.total }}</td>
                            </tr>
                          </table>
                        </td>



                      </tr>



                </template>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Addresses -->
          <div class="dashboard-wrapper user-dashboard collapse" id="address">

            <div class="row">
              <div class="col-md-10">
                <span v-if="!addresses" class="ml-3">You have not added any address yet.</span>
              </div>
              <div class="col-md-2">
                <button @click.prevent="showAddAddressForm" class="btn address-btn pull-right">Add address</button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 add-address">
                <AddAddressComponent :userId="user.id"></AddAddressComponent>
              </div>
            </div>
            <div v-if="addresses">
              <h2>Your addresses:</h2>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                  <tr>
                    <th>Country</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Street</th>
                    <th>Flat</th>
                    <th>Zip</th>
                    <th>Action</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <template v-for="address in addresses">
                    <tr>
                      <td>{{ address.country }}</td>
                      <td>{{ address.city }}</td>
                      <td>{{ address.street }}</td>
                      <td>{{ address.house }}</td>
                      <td>{{ address.flat }}</td>
                      <td>{{ address.zip }}</td>
                      <td>
                        <div class="btn-group" role="group">
                          <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                          <button @click.prevent="removeAddress(address.id)" type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                        </div>
                      </td>
                    </tr>
                  </template>

                  </tbody>
                </table>
              </div>
            </div>

          </div>

          <!-- Wishlist -->
          <div class="dashboard-wrapper user-dashboard collapse" id="wishlist">
            <div class="row">
              <div v-for="product in wishlist" class="col-md-4">
                <div class="product-item">
                  <div class="product-thumb">
                    <span v-if="product.sale" class="bage">Sale</span>
                    <img class="img-responsive" :src="product.title_image" alt="product-img" />
                    <div class="preview-meta">
                      <ul>
                        <li>
									<span  data-toggle="modal" :data-target="`#product-modal-${product.id}`">
										<i class="tf-ion-ios-search-strong"></i>
									</span>
                        </li>
                        <li>
                          <a @click.prevent="addWishlist(product.id)" href="#!" ><i :id="`wishlist-btn-${product.id}`" class="far fa-heart"></i></a>
                        </li>
                        <li>
                          <a href="#!"><i class="tf-ion-android-cart"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-content">
                    <h4><router-link :to="{name:'product.index', params:{id:product.id}}">{{ product.title }}</router-link></h4>
                    <p class="price">${{product.price}}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Comments and review -->
          <div class="dashboard-wrapper user-dashboard collapse" id="comment">
            <div class="row">
              <h2>Reviews</h2>
              <div id="reviews" class="col-md-12">
                <div class="post-comments">
                  <ul class="media-list comments-list m-bot-50 clearlist">

                    <!-- Comment Item start-->
                    <li v-for="review in reviews" class="media">

                      <a class="pull-left" href="#!">
                        <img class="media-object comment-avatar" src="../../assets/images/blog/avater-1.jpg" alt="" width="50" height="50" />
                      </a>

                      <div class="media-body">
                        <div class="comment-info">
                          <h4 class="comment-author">
                            <a href="#!">{{ review.user }}</a>

                            <div class="pull-right">
                              <RatingComponent :grade="review.grade"></RatingComponent>
                            </div>>


                          </h4>
                          <time datetime="2013-04-06T13:53">{{ review.date }}</time>
                          <a class="comment-button" href="#!"><i class="tf-ion-chatbubbles"></i>Reply</a>
                        </div>

                        <p v-html="review.content"></p>
                      </div>

                    </li>
                    <!-- End Comment Item -->

                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <h2>Comments</h2>
              <ul class="media-list comments-list m-bot-50 clearlist ml-2">

                <!-- Comments -->
                <template v-for="comment in comments">
                  <li class="media">

                    <a class='pull-left' href='#!'>
                      <img class='media-object comment-avatar' src='images/blog/avater-1.jpg' alt='' width='50' height='50'>
                    </a>

                    <div class='media-body'>

                      <div class='comment-info'>
                        <div class='comment-author'>
                          <a href='#!'>{{ comment.author.first_name}}</a>
                        </div>
                        <time>July 02, 2015, at 11:34</time>
                      </div>

                      <p v-html="comment.content">

                      </p>

                    </div>

                  </li>
                </template>

              </ul>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "../../api";
import RatingComponent from "../product/components/RatingComponent.vue";
import AddAddressComponent from "./components/AddAddressComponent.vue";
export default {
  name: "IndexComponent",
  components: {AddAddressComponent, RatingComponent},
  mounted(){
    this.$store.dispatch('getUserProfile')
    this.getUserInfo();
    //this.getProfile()
  },

  data(){
    return{
      user: JSON.parse(localStorage.getItem('user')),
      comments:[],
      reviews:[],
      orders:[],
      addresses:[],
      wishlist:[],

      isEdit:null,
    }
  },

  computed:{
    // Processing | Canceled | completed | On Hold | Pending
    getStatus(status){

    }
  },

  methods:{
    getUserInfo(){
      if(localStorage.getItem('user')){
        this.$store.dispatch('getUserProfile')
        //this.user = JSON.parse(localStorage.getItem('user'));
        this.comments = this.user.comments;
        this.reviews = this.user.reviews;
        this.wishlist = this.user.wishlist;
        this.addresses = this.user.addresses;
        this.orders = this.user.orders;
        console.log(this.user);
      }else{
        console.log('user not register')
      }
    },

    getProfile(){
      api.get(`http://127.0.0.1:8000/api/client/profile/${this.user.id}/`)
          .then(res => {
              //console.log(res.data)
          })
          .catch(error => {
            console.log(error);
          })
    },

    showAddAddressForm(){
      const form = document.querySelector('.add-address');
      if(form.style.display === 'none'){
        form.style.display = 'block';
      }else{
        form.style.display = 'none';
      }
    },

    isEdit(id){
      return this.editId === id;
    },

    removeAddress(id){
      api.delete(`http://127.0.0.1:8000/api/client/profile/${this.user.id}/address/${id}`)
          .then(res => {
          this.getUserInfo();
            this.$wkToast(res.data.message, {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              transition: 'fade',
            })
          })
          .catch(error => {
            console.log(error)
          })
    },

    formatStatus(status){
      // Processing | Canceled | completed | On Hold | Pending
      switch(status) {
        case 0:
          return 'Processing';
        case 1:
          return 'Canceled';
        case 2:
          return 'Pending';
        case 3:
          return 'On Hold';
        case 4:
          return 'Completed';
      }
    },

    formatStatusColor(status){
      // Processing | Canceled | completed | On Hold | Pending
      switch(status) {
        case 0:
          return 'primary';
        case 1:
          return 'danger';
        case 2:
          return 'default';
        case 3:
          return 'info';
        case 4:
          return 'success';
      }
    },

    orderCanseled(id){
      api.delete(`http://127.0.0.1:8000/api/client/${this.user.id}/order/${id}`)
          .then(res => {
            console.log(res);
            this.$wkToast(res.data.message, {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              transition: 'fade',
            })
          })
          .catch(error => {
            console.log(error);
          })
    }

  }

}
</script>

<style scoped>

.collapse-btn:hover{
  background-color: black;
  color: white;
}

.address-btn:hover{
  background-color: black;
  color: white;
}
.add-address{
  display: none;
}
</style>