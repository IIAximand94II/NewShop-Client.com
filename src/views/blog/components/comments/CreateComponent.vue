<template>
  <div class="post-comments-form">
    <h3 class="post-sub-heading">Leave You Comments</h3>
      <div class="row">

        <!-- Comment -->
        <div class="form-group col-md-12">
          <textarea name="text" id="text" class=" form-control" rows="6" placeholder="Comment" maxlength="400"></textarea>
        </div>

        <!-- Send Button -->
        <div class="form-group col-md-12">
          <button type="submit" class="btn btn-small btn-main ">
            Send comment
          </button>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: "CreateComponent"
}
</script>

<style scoped>

</style>