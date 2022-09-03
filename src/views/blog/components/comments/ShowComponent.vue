<template>
  <div class="post-comments">
    <h3 class="post-sub-heading">10 Comments</h3>

    <ul class="media-list comments-list m-bot-50 clearlist">

      <!-- Comments -->
      <template v-for="comment in comments">
        <!-- Parent -->
        <li class="media">

          <a class='pull-left' href='#!'>
            <img class='media-object comment-avatar' src='images/blog/avater-1.jpg' alt='' width='50' height='50'>
          </a>

          <div class='media-body'>

            <div class='comment-info'>
              <div class='comment-author'>
                <a href='#!'>{{ comment.author.first_name}}</a>
              </div>
              <time>July 02, 2015, at 11:34</time>
              <a @click.prevent='showCommentForm(comment.id)' class='comment-button' href='#!'><i class='tf-ion-chatbubbles'></i>Reply</a>
            </div>

            <p v-html="comment.content">

            </p>

            <!-- Children -->
            <template v-if="comment.children" >
              <div v-html="showChildren(comment.children)">


              </div>
            </template>

            <!-- Reply comment -->
            <div :class="`reply-comment-${comment.id}`">

            </div>
          </div>

        </li>
      </template>

    </ul>
  </div>


  <!-- Comment form -->
  <div class="post-comments-form reply-form">
    <h4 class="">Reply </h4>
    <button @click.prevent="closeForm" class="btn"><i class="fas fa-times"></i></button>
    <div class="row">

      <!-- Comment -->
      <div class="form-group col-md-12">
        <textarea name="text" id="text" class=" form-control" v-model="this.$parent.content" rows="3" placeholder="Comment" maxlength="400"></textarea>
      </div>

      <!-- Send Button -->
      <div class="form-group col-md-12">
        <button type="submit" @click.prevent="this.$parent.$refs.createComment.addComment()" class="btn btn-small btn-main ">
          Send comment
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ShowComponent",

  mounted() {
    console.log(this.comments)
  },

  data(){
    return{

    }
  },

  methods:{
    showCommentForm(id){
      //let id = 2;
      let cont = document.querySelector(`.reply-comment-${id}`)
      let form = document.querySelector('.reply-form');
      cont.appendChild(form);
      form.style.display = 'block';
      form.setAttribute('data-parent', id);
    },

    closeForm(){
      let form = document.querySelector('.reply-form');
      this.$parent.content = '';
      form.style.display = 'none';
    },


    getTree(data){
      let tree = "<div class='media'><a class='pull-left' href='#!'>\n" +
          "            <img class='media-object comment-avatar' src='images/blog/avater-1.jpg' alt='' width='50' height='50'>\n" +
          "          </a>\n" +
          "\n" +
          "          <div class='media-body'>\n" +
          "\n" +
          "            <div class='comment-info'>\n" +
          "              <div class='comment-author'>\n" +
          "                <a href='#!'>"+data.author.first_name+"</a>\n" +
          "              </div>\n" +
          "              <time>July 02, 2015, at 11:34</time>\n" +
          `              <a v-on="click: showCommentForm(${data.id})" class='comment-button' href='#!'><i class='tf-ion-chatbubbles'></i>Reply</a>\n` +
          "            </div>\n" +
          "\n" +
          "            <p>\n" +
           data.content +
          "            </p>\n";

      if(data.children){
        tree += "<div class='media'>"+this.showChildren(data.children)+"</div>";
      }

      tree += "            <!-- Reply comment -->\n" +
          "            <div class='reply-comment-"+data.id+"'>\n" +
          "\n" +
          "            </div>" +
          "</div>"+
          "</div>";

      return tree;
    },

    showChildren(array){
      let str = '';

      array.forEach(elem => {
        str += this.getTree(elem);
      })

      return str;
    }
  },

  props:{
    comments: Object,
  }
}
</script>

<style scoped>
.reply-form{
  display: none;
}
</style>