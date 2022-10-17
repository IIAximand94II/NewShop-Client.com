<template>

    <section class="single-product">
      <div class="container">
        <!-- BreadCrumbs -->
        <div class="row">
          <div class="col-md-6">
            <ol class="breadcrumb">
              <li><router-link :to="{name:'main.index'}">Home</router-link></li>
              <li><router-link :to="{name:'shop.index'}">Shop</router-link></li>
              <li class="active">Single Product</li>
            </ol>
          </div>
        </div>


        <!-- alert message -->
        <div class="alert alert-danger alert-common alert-dismissible hidden" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <i class="tf-ion-close-circled"></i><span>Error message</span>
        </div>
        <!-- /. alert message -->


        <div class="row mt-20">
          <div class="col-md-5">

            <!-- Product gallery -->
            <div class="single-product-slider">
              <div id='carousel-custom' class='carousel slide' data-ride='carousel'>
                <div class='carousel-outer'>
                  <!-- me art lab slider -->

                  <div class='carousel-inner '>
                    <div class='item active'>
                      <img :src='selectedProduct.title_image' alt='' data-zoom-image="images/shop/single-products/product-1.jpg" />
                    </div>
                    <div v-for="image in selectedProduct.gallery" class='item'>
                      <img :src='image.image' alt='product image' data-zoom-image="images/shop/single-products/product-2.jpg" />
                    </div>
                  </div>

                  <!-- sag sol -->
                  <a class='left carousel-control' href='#carousel-custom' data-slide='prev'>
                    <i class="tf-ion-ios-arrow-left"></i>
                  </a>
                  <a class='right carousel-control' href='#carousel-custom' data-slide='next'>
                    <i class="tf-ion-ios-arrow-right"></i>
                  </a>
                </div>

                <!-- thumb -->
                <ol class='carousel-indicators mCustomScrollbar meartlab'>
                  <li data-target='#carousel-custom' data-slide-to='0' class='active'>
                    <img :src='selectedProduct.preview_image' alt='' />
                  </li>
                  <li v-for="preview_img in selectedProduct.gallery" data-target='#carousel-custom' data-slide-to='1'>
                    <img :src='preview_img.image' alt='product image' />
                  </li>
                </ol>
              </div>
            </div>
            <!-- /. End Product gallery -->

          </div>
          <div class="col-md-7">
            <div class="single-product-details">
              <h2>{{ selectedProduct.title}}</h2>

              <div class="pull-right">
                <RatingComponent :grade="productRating"></RatingComponent>
              </div>

              <p class="product-price">${{ selectedProduct.price }}</p>

              <p v-html="selectedProduct.excerpt" class="product-description mt-20">
              </p>
              <div class="color-swatches">
                <span>color:</span>
                <ul>
                  <template v-for="productGroup in productsGroup">
                      <li>
                        <a @click.prevent="getSelectedProduct(productGroup.id)" href="#" :style="`width: 26px; height: 26px; background-color: ${productGroup.color.hex}; border: none; margin-right: 3px`"></a>
                      </li>
                  </template>

                </ul>
              </div>
              <div class="product-size">
                <span>Size:</span>
                <select @change="changeSize($event)" class="form-control">
                  <option  v-for="size in selectedProduct.sizes" :value="size.id" :data-size="size.size">{{ size.size }}</option>
                </select>
              </div>
              <div class="product-quantity">
                <span>Quantity:</span>
                <div class="product-quantity-slider">
                  <input id="product-quantity" type="number" v-model="selectedQuantity" min="0" max="{{ maxQuantity }}" name="product-quantity">
                </div>
              </div>
              <div class="product-category">
                <span>Tags:</span>
                <ul>
                  <li v-for="tag in selectedProduct.tags"><a href="">{{ tag.title }}</a></li>
                </ul>
              </div>
              <a @click.prevent="addToCart(selectedProduct)" href="#" class="btn btn-main mt-20">Add To Cart</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="tabCommon mt-20">
              <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#details" aria-expanded="true">Details</a></li>
                <li class=""><a data-toggle="tab" href="#reviews" aria-expanded="false">Reviews (3)</a></li>
              </ul>
              <div class="tab-content patternbg">
                <div id="details" class="tab-pane fade active in">
                  <h4>Product Description</h4>
                  <div v-html="selectedProduct.description"></div>
                </div>
                <div id="reviews" class="tab-pane fade">
                  <div class="post-comments">
                    <ul class="media-list comments-list m-bot-50 clearlist">

                      <!-- Comment Item start-->
                      <li v-for="review in selectedProduct.reviews" class="media">

                        <a class="pull-left" href="#!">
                          <img class="media-object comment-avatar" src="../../assets/images/blog/avater-1.jpg" alt="" width="50" height="50" />
                        </a>

                        <div class="media-body">
                          <div class="comment-info">
                            <h4 class="comment-author">
                              <a href="#!">{{ review.user }}</a>

                              <div class="pull-right">
                                    <RatingComponent :grade="review.grade"></RatingComponent>
                              </div>


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

                  <div class="post-comments-form">
                    <h3 class="post-sub-heading">Add Review</h3>
                    <div class="row">

                      <div class="form-group col-md-12">
                        <div class="star-rating">
                          <span v-for="i in 5" @click.prevent="changeRating(i)" class="star">&star;</span>
                        </div>
                      </div>


                      <!-- Comment -->
                      <div class="form-group col-md-12">
                        <textarea name="text" id="text" class=" form-control" v-model="this.reviewContent" rows="6" placeholder="Comment" maxlength="400"></textarea>
                      </div>

                      <!-- Send Button -->
                      <div class="form-group col-md-12">
                        <button type="submit" @click.prevent="addReview(selectedProduct.group_id)" class="btn btn-small btn-main ">
                          Send comment
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="products related-products section">
      <div class="container">
        <div class="row">
          <div class="title text-center">
            <h2>Related Products</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="product-item">
              <div class="product-thumb">
                <span class="bage">Sale</span>
                <img class="img-responsive" src="../../assets/images/shop/products/product-5.jpg" alt="product-img" />
                <div class="preview-meta">
                  <ul>
                    <li>
                    <span  data-toggle="modal" data-target="#product-modal">
                      <i class="tf-ion-ios-search"></i>
                    </span>
                    </li>
                    <li>
                      <a href="#" ><i class="tf-ion-ios-heart"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-android-cart"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-content">
                <h4><a href="#">Reef Boardsport</a></h4>
                <p class="price">$200</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="product-item">
              <div class="product-thumb">
                <img class="img-responsive" src="../../assets/images/shop/products/product-1.jpg" alt="product-img" />
                <div class="preview-meta">
                  <ul>
                    <li>
                    <span  data-toggle="modal" data-target="#product-modal">
                      <i class="tf-ion-ios-search-strong"></i>
                    </span>
                    </li>
                    <li>
                      <a href="#" ><i class="tf-ion-ios-heart"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-android-cart"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-content">
                <h4><a href="product-single.html">Rainbow Shoes</a></h4>
                <p class="price">$200</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="product-item">
              <div class="product-thumb">
                <img class="img-responsive" src="../../assets/images/shop/products/product-2.jpg" alt="product-img" />
                <div class="preview-meta">
                  <ul>
                    <li>
                    <span  data-toggle="modal" data-target="#product-modal">
                      <i class="tf-ion-ios-search"></i>
                    </span>
                    </li>
                    <li>
                      <a href="#" ><i class="tf-ion-ios-heart"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-android-cart"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-content">
                <h4><a href="product-single.html">Strayhorn SP</a></h4>
                <p class="price">$230</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="product-item">
              <div class="product-thumb">
                <img class="img-responsive" src="../../assets/images/shop/products/product-3.jpg" alt="product-img" />
                <div class="preview-meta">
                  <ul>
                    <li>
                    <span  data-toggle="modal" data-target="#product-modal">
                      <i class="tf-ion-ios-search"></i>
                    </span>
                    </li>
                    <li>
                      <a href="#" ><i class="tf-ion-ios-heart"></i></a>
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-android-cart"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-content">
                <h4><a href="#">Bradley Mid</a></h4>
                <p class="price">$200</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- Modal -->
    <div class="modal product-modal fade" id="product-modal">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <i class="tf-ion-close"></i>
      </button>
      <div class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div class="modal-image">
                  <img class="img-responsive" src="../../assets/images/shop/products/modal-product.jpg" />
                </div>
              </div>
              <div class="col-md-3">
                <div class="product-short-details">
                  <h2 class="product-title">GM Pendant, Basalt Grey</h2>
                  <p class="product-price">$200</p>
                  <p class="product-short-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.
                  </p>
                  <a href="#!" class="btn btn-main">Add To Cart</a>
                  <a href="#!" class="btn btn-transparent">View Product Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import RatingComponent from "./components/RatingComponent.vue";
import api from "../../api";
export default {
  name: "IndexComponent",
  components: {RatingComponent},

  data(){
      return{
          productsGroup:[],
          selectedProduct:[],
          productRating:null,
          selectedSize:null,

          // review
          reviewGrade: null,
          reviewContent:'',



          //allProductsSizes:[],
          maxQuantity:1,
          selectedQuantity:1,



      }
  },

  mounted() {
      $(document).trigger('change')
      this.getSelectedProduct()
      this.quantityValidator()
  },

  methods:{
      getSelectedProduct(id=this.$route.params.id){
        console.log(id)
        this.axios.get(`http://127.0.0.1:8000/api/client/products/${id}`)
            .then(res => {
              this.selectedProduct = res.data.data
              this.productsGroup = this.selectedProduct.group
              this.productRating = this.getProductRating(this.selectedProduct.reviews);
              console.log(this.selectedProduct);
              console.log(this.productRating)
            })
            .catch(error => {
              console.log(error);
            })
      },

      getProductRating(array){
        let sum = 0;
        array.forEach(elem => {
          sum += parseFloat(elem.grade)
        })
        let avg = sum / array.length
        return avg.toFixed(2);
      },

      changeSize(event){
          let arr = [];
          this.selectedSize = event.target.value
          this.selectedSize = {
            id: event.target.value,
          }
          this.selectedProduct.available_sizes.forEach(elem => {
              // all product_size == selected size
              if(elem.id == this.selectedSize.id){
                  this.selectedSize['size'] = elem.size;
                  this.selectedSize['product_size'] = elem.id;
                  arr.push(elem)
              }
          });
          this.maxQuantity = arr.length
          console.log(this.selectedSize)
      },

      quantityValidator(){
          const input = document.querySelector('#product-quantity');
          const min = +input.min;
          const max = +input.max;

          input.addEventListener('input', (e) => {
            const value = +input.value;
            if (value > max) { input.value = max }
            else if (value < min) { input.value = min }
        })
      },

      addToCart(product){
        console.log(product)
         let size = this.selectedSize;
         let qty = Number(this.selectedQuantity) ?? 1;

        // if(qty > this.maxQuantity){
        //   console.log('qty > max. Max qty: '+this.maxQuantity+', you selected qty: '+qty)
        //   return false;
        //   qty = this.maxQuantity;
        // }else{
        //   console.log('qty < max. Max qty: '+this.maxQuantity+', you selected qty: '+qty)
        // }

        let cart = localStorage.getItem('cart');
        let cartProduct = [{
          'product_id': product.id,
          'size_id': Number(size.id),
          'qty': (qty<=this.maxQuantity)?qty:this.maxQuantity,
          'price': product.price,
          'total': product.price,
          //'price': product.price,
          //'total_price': product.price,
          //'qty': (qty<=this.maxQuantity)?qty:this.maxQuantity,

          'product_info':{
            'product_id': product.id,
            'title':product.title,
            'image':product.title_image,
            'color': product.color,
            'size': size,
            //'qty': (qty<=this.maxQuantity)?qty:this.maxQuantity,
            //'price': product.price,
            //'total_price': product.price,

          },
        }];

        if(!cart){
          localStorage.setItem('cart', JSON.stringify(cartProduct));
        }else{
          cart = JSON.parse(cart)
          cart.forEach(elem =>{
            if(elem.product_id === product.id && elem.size_id === Number(size.id)){
              elem.qty = Number(elem.qty)+1
              elem.total += product.price
              if(qty <= this.maxQuantity){
                console.log('qty > max. Max qty: '+this.maxQuantity+', you selected qty: '+qty)
                cartProduct = null
              }
              // else{
              //   console.log('qty < max. Max qty: '+this.maxQuantity+', you selected qty: '+qty)
              //   return false
              // }
            }

          })
          Array.prototype.push.apply(cart, cartProduct);

          localStorage.setItem('cart', JSON.stringify(cart))
        }


      },

      changeRating(grade){
        this.reviewGrade = grade;
        let stars = document.querySelectorAll('.star')
        stars.forEach((star, i) => {
          if(this.reviewGrade >= i+1){
            star.innerHTML = '&#9733';
          }else{
            star.innerHTML = '&#9734';
          }
        })
      },

      addReview(id){
        api.post(`http://127.0.0.1:8000/api/client/products/${id}/review`, {
          grade: this.reviewGrade,
          content: this.reviewContent,
          user_id: JSON.parse(localStorage.getItem('user')).id,
        })
            .then(res => {
              this.getSelectedProduct(this.selectedProduct.id)
              this.reviewGrade = null;
              this.reviewContent = '';
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
.star-rating{
  display: inline-block;
  margin: 4px;
  font-size: 2.4em;
  position: relative;
}
.star:hover{
  cursor: pointer;
}
.star-rating .curren-rating{
  position: absolute;
  top: 0;
  overflow: hidden;
  white-space: nowrap;

}
</style>