<template>
  <section class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content">
            <h1 class="page-name">Shop</h1>
            <ol class="breadcrumb">
              <li><a href="../../../index.html">Home</a></li>
              <li class="active">shop</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="products section">
    <div class="container">
      <div class="row">
        <div class="col-md-3">

            <FilterComponent></FilterComponent>

        </div>
        <div class="col-md-9">
          <div class="row">

            <div v-for="product in products" class="col-md-4">
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
                        <a href="#!" ><i class="tf-ion-ios-heart"></i></a>
                      </li>
                      <li>
                        <a href="#!"><i class="tf-ion-android-cart"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="product-content">
                  <h4><router-link :to="{name:'product.index', params:{id:product.id}}">{{ product.title }}</router-link></h4>
                  <p class="price">${{ product.price }}</p>
                </div>
              </div>
            </div>

            <!-- Modal -->
            <div v-for="product in products" class="modal product-modal fade" :id="`product-modal-${product.id}`">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <i class="tf-ion-close"></i>
              </button>
              <div class="modal-dialog " role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-8 col-sm-6 col-xs-12">
                        <div class="modal-image">
                          <img class="img-responsive" :src="product.title_image" alt="product-img" />
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="product-short-details">
                          <h2 class="product-title">{{ product.title }}, Basalt Grey</h2>
                          <p class="product-price">${{ product.price }}</p>
                          <p v-html="product.excerpt" class="product-short-description">

                          </p>
                          <a href="#" class="btn btn-main">Add To Cart</a>
                          <router-link :to="{name:'product.index', params:{id:product.id}}" class="btn btn-transparent">View Product Details</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><!-- /.modal -->

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import FilterComponent from "./components/FilterComponent.vue";
export default {
  name: "IndexComponent",

  mounted(){
      $(document).trigger('change')
      this.getProducts()
      this.getFilters()
  },

  data(){
      return {
          products: [],
          filters: [],
      }
  },

  methods:{
      getProducts(){
          this.axios.get('http://127.0.0.1:8000/api/products')
          .then(res => {
              this.products = res.data.data;
              console.log(this.products);
          })
      },

      getFilters(){
          this.axios.get('http://127.0.0.1:8000/api/filters')
          .then(res => {
              //this.filters = res.data.data
              console.log(res.data.data);
          })
      }
  },

  components: {FilterComponent}
}
</script>

<style scoped>

</style>