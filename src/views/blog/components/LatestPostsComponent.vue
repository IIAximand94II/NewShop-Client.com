<template>
  <div class="widget widget-latest-post">
    <h4 class="widget-title">Latest Posts</h4>
    <div class="media">
      <a class="pull-left" href="#!">
        <img class="media-object" src="images/blog/post-thumb.jpg" alt="Image">
      </a>
      <div class="media-body">
        <h4 class="media-heading"><a href="#!">Introducing Swift for Mac</a></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.</p>
      </div>
    </div>
    <div class="media">
      <a class="pull-left" href="#!">
        <img class="media-object" src="images/blog/post-thumb-2.jpg" alt="Image">
      </a>
      <div class="media-body">
        <h4 class="media-heading"><a href="#!">Welcome to Themefisher Family</a></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.</p>
      </div>
    </div>
    <div class="media">
      <a class="pull-left" href="#!">
        <img class="media-object" src="images/blog/post-thumb-3.jpg" alt="Image">
      </a>
      <div class="media-body">
        <h4 class="media-heading"><a href="#!">Warm welcome from swift</a></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.</p>
      </div>
    </div>
    <div class="media">
      <a class="pull-left" href="#!">
        <img class="media-object" src="images/blog/post-thumb.jpg" alt="Image">
      </a>
      <div class="media-body">
        <h4 class="media-heading"><a href="#!">Introducing Swift for Mac</a></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LatestPostsComponent",

  mounted() {
    //this.getLatestPosts()
  },

  data(){
    return{
      latestPosts:[],
    }
  },

  methods:{
    getLatestPosts(){
      axios.get('http://127.0.0.1:8000/api/client/blog/posts/latest')
      .then(res => {
        this.latestPosts = res.data.data;
        //console.log(res);
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