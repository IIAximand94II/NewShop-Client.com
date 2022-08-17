<template>

    <div class="widget widget-tag">
      <h4 class="widget-title">Tags</h4>
      <ul class="widget-tag-list">
        <li v-for="tag in tags">
          <a @click.prevent="addTag(tag.id)" href="#">{{ tag.title }}</a>
        </li>
      </ul>
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
  .widget-tag{
     margin-top: 80px;
  }


</style>