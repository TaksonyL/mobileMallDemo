<template>
  <div class="goodArticle">
    <p class="articleHeader">
      <span class="line"></span>图文详情<span class="line"></span>
    </p>
    <div class="articleKContent">
      <img v-for="(item,key) in goodArticle" :key="key"  v-if="item.type == 1" :src="item.photo.url" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodArticle',
  props: {
    goodArticle : Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articleHeader{
  height: 40px;
  color: #b1a9a5;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #cccccc;
}
.articleHeader .line{
  height: 1px;
  width: 10%;
  background-color: #b1a9a5;
  display: inline-block;
  margin: 0 8px 0
}

.articleKContent{
  width: 100%;
}
.articleKContent img{
  width: 100%;
  vertical-align:bottom;
}
</style>
