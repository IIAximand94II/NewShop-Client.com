<template>
  <!-- Show comment -->
  <ShowComponent ref="showComments" v-bind:comments="comments"></ShowComponent>

  <!-- Create comment -->
  <CreateComponent ref="createComment" :postId="postId"></CreateComponent>
</template>

<script>
import ShowComponent from "./ShowComponent.vue";
import CreateComponent from "./CreateComponent.vue";
export default {
  name: "CommentsComponent",
  components: {CreateComponent, ShowComponent},

  props:{
    comments: Object,
    postId: Number
  },

  data(){
    return{
      content:'',
    }
  }
}
</script>

<style scoped>

</style>