<template>
  <div class="star-rating pull-right">
    <span v-for="n in 5">&star;</span>

    <div class="curren-rating" :style="{width: getRating + '%'}">
      <span v-for="n in 5" >&starf;</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "RatingComponent",

  props:{
    grade: Number,
  },

  computed:{
    getRating:function (){
      return (this.grade / 5) * 100;
    },
  },


}
</script>

<style scoped>
.star-rating{
  display: inline-block;
  margin: 4px;
  font-size: 2.4em;
  position: relative;
}
.star-rating .curren-rating{
  position: absolute;
  top: 0;
  overflow: hidden;
  white-space: nowrap;

}
</style>