<template>
  <SliderComponent></SliderComponent>

  <CategoryComponent></CategoryComponent>

  <section class="products section bg-gray">
    <div class="container">
      <div class="row">
        <div class="title text-center">
          <h2>Trendy Products</h2>
        </div>
      </div>
      <div class="row">

        <div v-for="hit in hits" class="col-md-4">
          <div class="product-item">
            <div class="product-thumb">
              <span v-if="hit.sale" class="bage">Sale</span>
              <img class="img-responsive" :src="hit.title_image" alt="product-img" />
              <div class="preview-meta">
                <ul>
                  <li>
									<span @click.prevent="getSelectedProduct(hit.id)" data-toggle="modal" data-target="#product-modal">
										<i class="tf-ion-ios-search-strong"></i>
									</span>
                  </li>
                  <li>
                    <a @click.prevent="addWishlist(hit.id)" href="#!" ><i :id="`wishlist-btn-${hit.id}`" class="far fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i class="tf-ion-android-cart"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-content">
              <h4><router-link :to="{name:'product.index', params:{id:hit.id}}">{{ hit.title+', '+hit.color.title }}</router-link></h4>
              <p class="price">${{hit.price}}</p>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div v-if="selectedProduct" class="modal product-modal fade" id="product-modal">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="tf-ion-close"></i>
          </button>
          <div class="modal-dialog " role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-8 col-sm-6 col-xs-12">
                    <div class="modal-image">
                      <img class="img-responsive" :src="selectedProduct.title_image" alt="product-img" />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="product-short-details">

                      <h2 class="product-title">{{ selectedProduct.title+', '+selectedProduct.color.title }}</h2>

                      <div class="row">
                        <RatingComponent :grade="5"></RatingComponent>
                      </div>

                      <p class="product-price">${{ selectedProduct.price }}</p>
                      <p v-html="selectedProduct.excerpt" class="product-short-description">

                      </p>

                      <div class="single-product-details">
                        <!-- Colors -->
                        <div class="color-swatches">
                          <span>Colors:</span>
                          <div class="row">
                            <ul>
                              <template v-for="productsGroup in selectedProduct.group">
                                <li>
                                  <a @click.prevent="getSelectedProduct(productsGroup.id)" href="#" :style="`width: 25px; height: 25px; background-color: ${productsGroup.color.hex}; border: none; margin-right: 2px`"></a>
                                </li>
                              </template>

                            </ul>
                          </div>
                        </div>

                        <!-- Sizes -->
                        <div class="product-size">
                          <span>Sizes:</span>
                          <select @change="changeSize($event)" class="form-control">
                            <option value="1">S</option>
                            <option value="2">M</option>
                          </select>
                        </div>

                      </div>

                      <a href="#" class="btn btn-main">Add To Cart</a>
                      <router-link :to="{name:'product.index', params:{id:selectedProduct.id}}" class="btn btn-transparent">View Product Details</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- /.modal -->

      </div>
    </div>
  </section>

</template>

<script>

import SliderComponent from "./components/SliderComponent.vue";
import CategoryComponent from "./components/CategoryComponent.vue";
import api from "../../api";
import RatingComponent from "../product/components/RatingComponent.vue";
export default {
  name: "HomeComponent",
  mounted() {
    $(document).trigger('change');
    //this.$store.dispatch('getHits')
    this.getHits();
  },

  data(){
    return{
      hits:[],
      selectedProduct:null,
    }
  },

  methods:{
      getHits(){
          this.axios.get('http://127.0.0.1:8000/api/client/products/hits')
            .then(res => {
                this.hits = res.data.data
                console.log(this.hits)
            })
            .catch(error => {
              console.log(error);
            })
      },

      getSelectedProduct(id){
        this.axios.get(`http://127.0.0.1:8000/api/client/products/${id}`)
            .then(res => {
              this.selectedProduct = res.data.data;
              console.log(this.selectedProduct.group);
            })
      },

      addWishlist(id){
        const btn = document.querySelector(`#wishlist-btn-${id}`)
        api.post('http://127.0.0.1:8000/api/client/products/wishlist', {
          'product_id':id,
        })
        .then(res => {
          console.log(res)
          btn.classList.toggle('fas');
        })
        .catch(error => {
          console.log(error.response)
        })
      }

  },
  components: {RatingComponent, CategoryComponent, SliderComponent},
}
</script>

<style scoped>

</style>