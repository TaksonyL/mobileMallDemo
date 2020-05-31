<template>
  <div class="toTop">
    <img src="@/assets/images/toTop.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'ToTop',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toTop{
  position: absolute;
  z-index: 9999;
  bottom: 55px;
  width: 50px;
  right: 5px;
}
.toTop img{
  width: 100%;
}
</style>
