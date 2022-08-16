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
									<span  data-toggle="modal" :data-target="`#product-modal-${hit.id}`">
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
              <h4><router-link :to="{name:'product.index', params:{id:hit.id}}">{{ hit.title }}</router-link></h4>
              <p class="price">${{hit.price}}</p>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div v-for="hit in hits" class="modal product-modal fade" :id="`product-modal-${hit.id}`">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="tf-ion-close"></i>
          </button>
          <div class="modal-dialog " role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-8 col-sm-6 col-xs-12">
                    <div class="modal-image">
                      <img class="img-responsive" :src="hit.title_image" alt="product-img" />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="product-short-details">
                      <h2 class="product-title">{{ hit.title }}</h2>
                      <p class="product-price">${{ hit.price }}</p>
                      <p v-html="hit.excerpt" class="product-short-description">

                      </p>
                      <a href="#" class="btn btn-main">Add To Cart</a>
                      <router-link :to="{name:'product.index', params:{id:hit.id}}" class="btn btn-transparent">View Product Details</router-link>
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
export default {
  name: "HomeComponent",
  mounted() {
    $(document).trigger('change')
    //this.$store.dispatch('getHits')
    this.getHits()
  },

  data(){
    return{
      hits:[],
    }
  },

  methods:{
      getHits(){
          this.axios.get('http://127.0.0.1:8000/api/products/hits')
            .then(res => {
                this.hits = res.data.data
                console.log(this.hits)
            })
            .catch(error => {
              console.log(error);
            })
      }
  },
  components: {CategoryComponent, SliderComponent},
}
</script>

<style scoped>

</style>