<template>
  <!-- Breadcrumbs -->
  <section class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content">
            <h1 class="page-name">Blog</h1>
            <ol class="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li class="active">blog</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main content -->
  <section class="page-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div v-if="post" class="post post-single">
            <div class="post-thumb">
              <img class="img-responsive" :src="post.image" alt="">
            </div>
            <h2 class="post-title">{{ post.title }}</h2>
            <div class="post-meta">
              <ul>
                <li>
                  <i class="tf-ion-ios-calendar"></i> {{ post.updated }}
                </li>
                <li>
                  <i class="tf-ion-android-person"></i> POSTED BY
                </li>
                <li>
                  <i class="tf-ion-ios-pricetags"></i><a href="#!"> {{ postCategory.title}}</a>
                </li>
                <li>
                  <i class="tf-ion-ios-pricetags"></i>
                  <template v-for="tag in post.tags">
                    <a href="#!"> {{ tag.title }}</a>,
                  </template>

                </li>
                <li>
                  <a href="#!"><i class="tf-ion-chatbubbles"></i> {{ post.totalComments ?? 0}} COMMENTS</a>
                </li>
              </ul>
            </div>
            <div class="post-content post-excerpt" v-html="post.content">
            </div>
            <div class="post-social-share">
              <h3 class="post-sub-heading">Share this post</h3>
              <div class="social-media-icons">
                <ul>
                  <li><a class="facebook" href="https://themefisher.com/"><i class="tf-ion-social-facebook"></i></a></li>
                  <li><a class="twitter" href="https://themefisher.com/"><i class="tf-ion-social-twitter"></i></a></li>
                  <li><a class="dribbble" href="https://themefisher.com/"><i class="tf-ion-social-dribbble-outline"></i></a></li>
                  <li><a class="instagram" href="https://themefisher.com/"><i class="tf-ion-social-instagram"></i></a></li>
                  <li><a class="googleplus" href="https://themefisher.com/"><i class="tf-ion-social-googleplus"></i></a></li>
                </ul>
              </div>
            </div>

            <!-- Comments -->

            <CommentsComponent v-bind:comments="comments" :postId="post.id"></CommentsComponent>

            <!-- End comments -->

          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
import CreateComponent from "./components/comments/CreateComponent.vue";
import axios from "axios";
import CommentsComponent from "./components/comments/CommentsComponent.vue";
export default {
  name: "PostView",
  components: {CommentsComponent, CreateComponent},

  mounted() {
    this.getPost()
    console.log(this.$route.params.id);
  },

  updated() {
    //this.getPost()
  },

  data(){
    return{
      post:[],
      postCategory:[],
      comments:[],
    }
  },

  methods:{
    getPost(){
      axios.get(`http://127.0.0.1:8000/api/client/blog/posts/${this.$route.params.id}`)
      .then(res => {
        this.post = res.data.data;
        this.comments = res.data.data.comments;
        this.postCategory = res.data.data.category;
        console.log(this.comments);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
}
</script>

<style scoped>

</style>
