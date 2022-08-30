<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="row">

        <div class="col-md-8">
          <!-- Posts -->
          <template v-for="post in posts">
            <div class="post">
              <div class="post-media post-thumb">
                <a href="#">
                  <img :src="post.image" alt="Titleimage">
                </a>
              </div>
              <h2 class="post-title"><a href="#">{{ post.title }}</a></h2>
              <div class="post-meta">
                <ul>
                  <li>
                    <i class="tf-ion-ios-calendar"></i> {{ post.updated }}
                  </li>
                  <li>
                    <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                  </li>
                  <li>
                    <i class="tf-ion-ios-pricetags"></i><a href="#!"> {{ post.category.title }}</a>
                  </li>
                  <li>
                    <a href="#!"><i class="tf-ion-chatbubbles"></i> {{ post.totalComments ?? 0}} COMMENTS</a>
                  </li>
                </ul>
              </div>
              <div class="post-content">
                <p v-html="post.excerpt"></p>
                <router-link :to="{ name:'blog.post', params:{id: post.id} }" class="btn btn-main">Continue Reading</router-link>
              </div>
            </div>
          </template>

          <!-- End Posts -->

          <!-- Pagination -->
          <div class="text-center">
            <ul class="pagination post-pagination">
              <li><a href="#!">Prev</a>
              </li>
              <li class="active"><a href="#!">1</a>
              </li>
              <li><a href="#!">2</a>
              </li>
              <li><a href="#!">3</a>
              </li>
              <li><a href="#!">4</a>
              </li>
              <li><a href="#!">5</a>
              </li>
              <li><a href="#!">Next</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-md-4">
          <aside class="sidebar">

            <!-- Latest Posts -->
            <LatestPostsComponent></LatestPostsComponent>
            <!-- End Latest Posts -->

            <!-- Category -->
            <CategoryComponent></CategoryComponent>
            <!-- End category  -->

            <!-- Tag -->
            <TagComponent></TagComponent>
            <!-- End tag  -->

          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LatestPostsComponent from "./components/LatestPostsComponent.vue";
import CategoryComponent from "./components/CategoryComponent.vue";
import TagComponent from "./components/TagComponent.vue";
import axios from "axios";
export default {
  name: "IndexView",
  components: {TagComponent, CategoryComponent, LatestPostsComponent},

  mounted() {
    this.getPosts()
  },

  data(){
    return{
      posts:[]
    }
  },

  methods:{
    getPosts(){
      axios.get('http://127.0.0.1:8000/api/client/blog/posts')
      .then(res => {
        this.posts = res.data.data;
        console.log(res.data.data);
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