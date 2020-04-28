<template>
  <div class="recommend">
    <div class="recommendBlock" v-for="(item,key) in recommendMsg" :key="key">
      <div class="recommendMsg">
        <p class="title">{{item.title}}</p>
        <p class="text">{{item.text}}</p>
      </div>
      <img :src="item.imageUrl" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendMsg:{
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 140px;
  align-content: space-around;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 1px 0 0 #d9d9d9;
  background-color: #fff;
}

.recommendBlock{
  width: 47%;
  height: 70px;
  background-color: greenyellow;
  border-radius: 10px;
  position: relative;
}
.recommendBlock img{
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
}
.recommendBlock:nth-child(1){
  background-color: #fdf4e6;
  /* height: 140px; */
  height: 100%;
}
.recommendBlock:nth-child(2){
  background-color: #fff3f1;
  height: 47%;
}
.recommendBlock:nth-child(3){
  background-color: #eef9fc;
  height: 47%;
}

.recommendMsg{
  padding: 12px 0 0 14px;
  position: relative;
  z-index: 9;
}
.recommendMsg .title{
  font-size: 16px;
  color: #43240c;
  line-height: 24px;
}
.recommendMsg .text{
  font-size: 12px;
  color: #ff9e55
}
</style>
