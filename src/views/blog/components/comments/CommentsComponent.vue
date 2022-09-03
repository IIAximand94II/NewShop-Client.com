<template>
  <!-- Show comment -->
  <ShowComponent ref="showComments" v-bind:comments="comments"></ShowComponent>

  <!-- Create comment -->
  <CreateComponent ref="createComment"></CreateComponent>
</template>

<script>
import ShowComponent from "./ShowComponent.vue";
import CreateComponent from "./CreateComponent.vue";
export default {
  name: "CommentsComponent",
  components: {CreateComponent, ShowComponent},

  props:{
    comments: Object
  },

  data(){
    return{
      postId: this.$parent.post.id,
      content:'',
    }
  }
}
</script>

<style scoped>

</style>