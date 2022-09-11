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
          <button type="submit" @click.prevent="addComment(postId)" class="btn btn-small btn-main ">
            Send comment
          </button>
        </div>

      </div>
  </div>
</template>

<script>
import api from "../../../../api";
export default {
  name: "CreateComponent",

  props:{
    postId: Number
  },

  methods:{
    addComment(parent=null){
      console.log('add comment');
      let id = this.$parent.postId;
      api.post(`http://127.0.0.1:8000/api/client/blog/posts/${id}/comments`, {
        //parent_id: parent,
        content: this.$parent.content,
        user_id: JSON.parse(localStorage.getItem('user')).id
      })
      .then(res => {
        this.$wkToast(res.data.message, {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          transition: 'fade',
        })
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