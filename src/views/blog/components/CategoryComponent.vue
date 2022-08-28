<template>
  <div class="widget widget-category">
    <h4 class="widget-title">Categories</h4>
    <ul class="widget-category-list">
      <template v-for="category in categories">
        <li>
          <a :title="category.description" href="#!">{{ category.title }}</a>
        </li>
      </template>

    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CategoryComponent",

  mounted() {
    this.getCategories();
  },

  data(){
    return{
      categories:[],
    }
  },

  methods:{
    getCategories(){
      axios.get('http://127.0.0.1:8000/api/client/blog/categories')
          .then(res => {
            this.categories = res.data.data;
            //console.log(res);
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