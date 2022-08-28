<template>
  <div class="widget widget-tag">
    <h4 class="widget-title">Tag Cloud</h4>
    <ul class="widget-tag-list">
      <template v-for="tag in tags">
        <li>
          <a :title="tag.description" href="#!">{{ tag.title }}</a>
        </li>
      </template>

    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TagComponent",

  mounted() {
    this.getTags();
  },

  data(){
    return{
      tags:[],
    }
  },

  methods:{
    getTags(){
      axios.get('http://127.0.0.1:8000/api/client/blog/tags')
          .then(res => {
            this.tags = res.data.data;
            //console.log(res.data.data);
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