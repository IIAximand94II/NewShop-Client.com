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
                      <img :src='product.title_image' alt='' data-zoom-image="images/shop/single-products/product-1.jpg" />
                    </div>
                    <div v-for="image in selectedProductGallery" class='item'>
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
                    <img :src='product.preview_image' alt='' />
                  </li>
                  <li v-for="preview_img in selectedProductGallery" data-target='#carousel-custom' data-slide-to='1'>
                    <img :src='preview_img.image' alt='product image' />
                  </li>
                </ol>
              </div>
            </div>
            <!-- /. End Product gallery -->

          </div>
          <div class="col-md-7">
            <div class="single-product-details">
              <h2>{{ product.title}}</h2>
              <p class="product-price">${{ selectedProduct.price }}</p>

              <p v-html="product.description" class="product-description mt-20">
              </p>
              <div class="color-swatches">
                <span>color:</span>
                <ul>
                  <template v-for="product_group in products_group">
                      <li v-for="p_color in product_group.color">
                        <a @click.prevent="changeSelectedProduct(product_group)" href="#" :style="`width: 26px; height: 26px; background-color: ${p_color.hex}; border: none; margin-right: 3px`" :title="p_color.title"></a>
                      </li>
                  </template>

                </ul>
              </div>
              <div class="product-size">
                <span>Size:</span>
                <select @change="changeSize($event)" class="form-control">
                  <option  v-for="size in selectedProduct.sizes" :value="size.id">{{ size.size }}</option>
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
                  <li v-for="tag in product.tags"><a href="">{{ tag.title }}</a></li>
                </ul>
              </div>
              <a @click.prevent="addToCart(selectedProduct.id)" href="#" class="btn btn-main mt-20">Add To Cart</a>
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
                  <div v-html="product.description"></div>
                </div>
                <div id="reviews" class="tab-pane fade">
                  <div class="post-comments">
                    <ul class="media-list comments-list m-bot-50 clearlist">

                      <!-- Comment Item start-->
                      <li v-for="review in product.reviews" class="media">

                        <a class="pull-left" href="#!">
                          <img class="media-object comment-avatar" src="../../assets/images/blog/avater-1.jpg" alt="" width="50" height="50" />
                        </a>

                        <div class="media-body">
                          <div class="comment-info">
                            <h4 class="comment-author">
                              <a href="#!">{{ review.user }}</a>

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
export default {
  name: "IndexComponent",

  data(){
      return{
          product:[],
          products_group:[],
          selectedProduct:[],
          selectedProductGallery:[],

          selectedSize:null,
          allProductsSizes:[],
          maxQuantity:1,
          selectedQuantity:1,
          errorMessage:'Warning! Better check yourself.You are not looking too good',
      }
  },

  mounted() {
      $(document).trigger('change')
      this.getProduct()
      this.quantityValidator()
  },


  methods:{
      getProduct(){
          this.axios.get(`http://127.0.0.1:8000/api/products/${this.$route.params.id}`)
          .then(res => {
              this.product = res.data.data;
              this.products_group = res.data.data.group;
              this.selectedProduct = this.products_group[0];
              this.selectedProductGallery = this.selectedProduct.gallery
              this.allProductsSizes = this.products_group[0].available_sizes;
              this.selectedSize = this.products_group[0].sizes[0].id;
              this.maxQuantity = Number(this.allProductsSizes.length);
              this.selectedSize = this.products_group[0].sizes[0].length;
              console.log(this.products_group[0].available_sizes);
              console.log(this.product);
          })
      },

      changeSelectedProduct(product){
          this.selectedProduct = product;
          this.selectedProductGallery = product.gallery
          this.allProductsSizes = this.selectedProduct.available_sizes;
          this.maxQuantity = this.allProductsSizes.length;
          //console.log(this.maxQuantity);
      },

      changeSize(event){
          let arr = [];
          this.selectedSize = event.target.value
          this.selectedProduct.available_sizes.forEach(elem => {
              // all product_size == selected size
              if(elem.id == this.selectedSize){
                  arr.push(elem)
              }
          });
          this.maxQuantity = arr.length
          //console.log(this.maxQuantity);
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

      addToCart(id){
        // console.log(this.selectedProduct);
        // console.log('Add to cart, id: '+id);
        // console.log('color id: '+this.selectedProduct.color[0].id);
        // console.log('size id: '+ this.selectedSize);

        console.log('max quantity:'+this.maxQuantity)

        let color = Number(this.selectedProduct.color[0].id)
        let size = Number(this.selectedSize);
        let qty = Number(this.selectedQuantity)??1;

        // if(qty > this.maxQuantity){
        //   console.log('qty > max. Max qty: '+this.maxQuantity+', you selected qty: '+qty)
        //   return false;
        //   qty = this.maxQuantity;
        // }else{
        //   console.log('qty < max. Max qty: '+this.maxQuantity+', you selected qty: '+qty)
        // }

        let cart = localStorage.getItem('cart');
        let product = [{
          'product_id': this.product.id,
          'product_group_id':id,
          'qty':(qty<=this.maxQuantity)?qty:this.maxQuantity,
          'color':color,
          'size':size,
        }];

        //console.log(size);
        if(!cart){
          localStorage.setItem('cart', JSON.stringify(product));
        }else{
          cart = JSON.parse(cart)
          cart.forEach(elem =>{
            if(elem.product_group_id === id && elem.size === size){
              elem.qty = Number(elem.qty)+1
              if(qty <= this.maxQuantity){
                console.log('qty > max. Max qty: '+this.maxQuantity+', you selected qty: '+qty)
                product = null
              }else{
                console.log('qty < max. Max qty: '+this.maxQuantity+', you selected qty: '+qty)
                return false
              }
            }

          })
          Array.prototype.push.apply(cart, product);

          localStorage.setItem('cart', JSON.stringify(cart))
        }


      },

      // errorMessage(message=''){
      //   const cont = document.querySelector('.alert-danger');
      // }

  }
}
</script>

<style scoped>

</style>