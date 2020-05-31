<template>
  <div class="userDetail">
    <div class="imgWrap">
      <img :src="publicPath+'images/tabbar/user0.png'" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userDetail .imgWrap{
  margin: 50px auto 100px;
  width: 100px;
  height: 100px;
  background-color: #eeeeee;
  border-radius: 50%;
  overflow: hidden;
}
.userDetail .imgWrap img{
  width: 100%;
}
</style>
