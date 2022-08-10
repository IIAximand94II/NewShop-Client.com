<template>
    <section class="page-404">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <router-link :to="{name:'main.index'}" class="btn btn-main"><i class="tf-ion-android-arrow-back"></i> Go Home</router-link>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "IndexComponent"
}
</script>

<style scoped>

</style>