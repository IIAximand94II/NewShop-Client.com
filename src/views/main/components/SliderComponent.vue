<template>
  <div class="hero-slider">
    <div class="slider-item th-fullpage hero-area" style="background-image: url(src/assets/images/slider/slider-1.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-center">
            <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
            <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br> is hidden in details.</h1>
            <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" class="btn" href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-item th-fullpage hero-area" style="background-image: url(src/assets/images/slider/slider-3.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-left">
            <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
            <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br> is hidden in details.</h1>
            <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" class="btn" href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-item th-fullpage hero-area" style="background-image: url(src/assets/images/slider/slider-2.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-right">
            <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
            <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br> is hidden in details.</h1>
            <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" class="btn" href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",

  mounted() {
    this.getSlider();
  },

  data(){
    return{
      sliders:[],
    }
  },

  methods:{
    getSlider(){
      this.axios.get('http://127.0.0.1:8000/client/api/sliders')
          .then(res => {
            this.sliders = res.data.data;
            //console.log(this.sliders);
          })
          .catch(error => {
            console.log(error);
          })
    }
  }
}
</script>

<style scoped>

</style>