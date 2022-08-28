<template>
  <h4 class="widget-title">Categories</h4>
  <div class="panel-group commonAccordion" id="accordion" role="tablist" aria-multiselectable="true">
    <div v-for="category in categories" class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingOne">
        <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" :href="`#collapse-${category.id}`" aria-expanded="true" aria-controls="collapseOne">
            {{ category.title }}
          </a>
        </h4>
      </div>
      <div :id="`collapse-${category.id}`" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        <div class="panel-body">
          <ul>
            <template v-for="children_cat in category.children">
                <li>{{ children_cat.title }}</li>
                <template v-for="child_cat in children_cat.children">
                  <li> - <input type="checkbox" v-model="selectedCategories" :value="child_cat.id"> {{ child_cat.title }}</li>
                </template>
            </template>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesComponent",

  mounted() {
      this.getCategories()
  },

  data(){
      return{
          categories:[],
          selectedCategories:[],
      }
  },

  methods:{
    getCategories(){
      this.axios.get('http://127.0.0.1:8000/api/client/filters')
          .then(res => {
            this.categories = res.data.categories
            //console.log(this.categories)
          })
          .catch(error => {
            console.log(error);
          })
    },
  }
}
</script>

<style scoped>

</style>