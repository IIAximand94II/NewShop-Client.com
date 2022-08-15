<template>
    <div class="tag-filter-container">
        <h4 class="widget-title" style="margin-top: 20px">Tags</h4>
          <div class="tag-container">
                <a @click.prevent="addTag(tag.id)" v-for="tag in tags" class="btn btn-main btn-small">{{ tag.title }}</a>
          </div>
    </div>

</template>

<script>
export default {
  name: "TagComponent",

  props:{
      tags: Object
  },

  data(){
    return{
      selectedTags:[],
    }
  },

  methods:{
    addTag(id){
      console.log('add tag: '+id);
      if(this.selectedTags.includes(id)){
        //this.selectedColors.slice(id);
        this.selectedTags = this.selectedTags.filter(e => {
          return e !== id
        })
      }else{
        this.selectedTags.push(Number(id));
      }

    },
  }

}
</script>

<style scoped>
  .tag-filter-container{
     margin-top: 60px;
  }

  .btn{
      margin: 3px;
      font-size: 0.7em;
      border-radius: 10px;
  }

</style>