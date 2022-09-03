<template>
  <div class="post-comments-form">
    <h3 class="post-sub-heading">Leave You Comments</h3>
      <div class="row">

        <!-- Comment -->
        <div class="form-group col-md-12">
          <textarea name="text" id="text" class=" form-control" v-model="this.$parent.content" rows="6" placeholder="Comment" maxlength="400"></textarea>
        </div>

        <!-- Send Button -->
        <div class="form-group col-md-12">
          <button type="submit" @click.prevent="addComment()" class="btn btn-small btn-main ">
            Send comment
          </button>
        </div>

      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateComponent",

  methods:{
    addComment(parent=null){
      console.log('add comment');
      let id = this.$parent.postId;
      axios.post(`http://127.0.0.1:8000/api/client/blog/posts/${id}/comments`, {
        parent_id: parent,
        content: this.$parent.content,
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>