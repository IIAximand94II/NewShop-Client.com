<template>
      <div class="widget">
        <h4 class="widget-title">Short By</h4>
        <!-- Gender -->
        <select @change="changeGender($event)" class="form-control gender">
          <option value="0">Women</option>
          <option value="1">Man</option>
        </select>
      </div>
      <div class="widget product-category">
        <!-- Categories -->
        <CategoriesComponent ref="categories"></CategoriesComponent>

        <!-- Colors -->
        <h4 class="widget-title">Colors</h4>
        <div>
          <template v-for="color in filters.colors">
            <button @click.prevent="addColor(color.id)" :id="color.id" :style="`width: 36px; height: 36px; background-color: ${color.hex}; border: none; margin-right: 3px`" :title="color.title"></button>
          </template>
        </div>

        <!-- Sizes -->
        <h4 class="widget-title" style="margin-top: 10px">Sizes</h4>
        <div class="panel-group commonAccordion" id="sizes-accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="sizes-headingOne">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#sizes-accordion" href="#sizes-collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Product Size
                </a>
              </h4>
            </div>
            <div id="sizes-collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="sizes-headingOne">
              <div class="panel-body">
                <ul>
                  <li v-for="size in filters.sizes">
                    <input type="checkbox" v-model="selectedSizes" :id="size.id" :value="size.id"> {{size.size}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Availability -->
        <h4 class="widget-title">Product availability</h4>
        <div class="panel-group commonAccordion" id="availability-accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="availability-headingOne">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#availability-accordion" href="#availability-collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Availability
                </a>
              </h4>
            </div>
            <div id="availability-collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div class="panel-body">
                <ul>
                  <li><input type="checkbox" v-model="availability" value="in_stock"> In stock</li>
                  <li><input type="checkbox" v-model="availability" value="on_order"> On order</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Price -->
        <h4 class="widget-title" style="margin-top: 30px">Select price</h4>
        <div class="range-slider">
          <span class="price-span min-price">${{ minPriceValue }}</span>
          <input type="range" :min="minPrice"
                              :max="maxPrice"
                              :step="step"
                              v-model.number="minPriceValue"
                              @change="setRangeSlider"
                              @mousemove="doNotCrossRange">
          <input type="range" :min="minPrice"
                              :max="maxPrice" :step="step"
                              v-model.number="maxPriceValue"
                              @change="setRangeSlider"
                              @mousemove="doNotCrossRange">
          <span class="price-span max-price">${{ maxPriceValue }}</span>
        </div>

        <!-- Tags -->
        <TagComponent ref="tags" v-bind:tags="tags"></TagComponent>

        <div style="margin-top: 50px">
          <button @click.prevent="filterProducts" class="btn btn-secondary">Apply Filters</button>
        </div>
    </div>
</template>

<script>
import TagComponent from "./TagComponent.vue";
import CategoriesComponent from "./CategoriesComponent.vue";
export default {
  name: "FilterComponent",
  components: {CategoriesComponent, TagComponent},

  beforeMount() {
      this.getFilters()
  },

  mounted() {

  },

  data(){
    return{
      filters: {},
      tags:[],

      step: 1,
      minPrice:null,
      maxPrice:null,
      minPriceValue: 0,
      maxPriceValue: 0,

      // filters,
      gender: 0,
      selectedSizes:[],
      selectedColors:Array(),
      availability:[],

    }
  },

  methods:{
      getFilters(){
        this.axios.get('http://127.0.0.1:8000/api/filters')
            .then(res => {
                this.filters = res.data
                this.tags = this.filters.tags
                this.minPrice = this.filters.price.min_price
                this.maxPrice = this.filters.price.max_price
                this.minPriceValue = this.filters.price.min_price
                this.maxPriceValue = this.filters.price.min_price+1
                //console.log(this.filters.categories)
            })
            .catch(error => {
                console.log(error);
            })
      },

      changeGender(e){
          this.gender = (e.target.value) ? 1 : 0;
      },

      addColor(id){
          console.log('add color: '+id);
          if(this.selectedColors.includes(id)){
            //this.selectedColors.slice(id);
            this.selectedColors = this.selectedColors.filter(e => {
              return e !== id
            })
          }else{
            this.selectedColors.push(Number(id));
          }

      },

      setRangeSlider(){
          if(this.minPriceValue > this.maxPriceValue){
            let tmp = this.maxPriceValue
            this.maxPriceValue = this.minPriceValue
            this.minPriceValue = tmp
          }
      },

      doNotCrossRange() {
        if(this.minPriceValue + this.step >= this.maxPriceValue) {
          let tmpMin = this.minPriceValue;
          let tmpMax = this.maxPriceValue;

          this.maxPriceValue = tmpMin + this.step;
          this.minPriceValue = tmpMax - this.step;
        }
      },

    filterProducts(){
        // console.log('Selected gender:', this.gender);
        // console.log('Selected categories:', this.$refs.categories.selectedCategories);
        // console.log('Selected colors:', this.selectedColors);
        // console.log('Selected sizes:', this.selectedSizes);
        // console.log('Selected availability:', this.availability);
        // console.log(`Selected price, min: ${this.minPriceValue}; max: ${this.maxPriceValue}`);
        // console.log('Selected tags:', this.$refs.tags.selectedTags);

        let price = {
            min_price: this.minPriceValue,
            max_price: this.maxPriceValue,
        }

        //console.log(price)
        this.axios.post('http://127.0.0.1:8000/api/products/filters', {
          'gender':this.gender,
          'categories':this.$refs.categories.selectedCategories,
          'colors':this.selectedColors,
          'sizes':this.selectedSizes,
          'availability':this.availability,
          'price':this.price,
          'tags':this.$refs.tags.selectedTags,
        })
            .then(res => {
              console.log(res);
            })
            .catch(error => {
              console.log(error);
            })
      }

  }
}
</script>

<style scoped>

/* Price slider */
.range-slider{
  margin-top: 15px;
  position: relative;
}

.range-slider svg, .range-slider input[type=range]{
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=range]::-webkit-slider-thumb{
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
.price-span{
  position: absolute;
  margin-top: 10px;
}
.max-price{
  right: 0;
}
</style>