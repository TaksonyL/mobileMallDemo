<template>
  <div class="home">
    <Navbar class="navbar">
      <div slot="navCenter">
        首页
      </div>
    </Navbar>
    <Banner :bannerImg='bannerImg' :bannerMsg='bannerMsg'/>
    <recommend class="recommend" :recommendMsg='recommendMsg'/>
    <rank :rankMsg='rankMsg'/>
    <h1>home</h1>
    <h1>home</h1>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import Banner from 'components/banner/Banner'
import PriceFont from 'components/priceFont/PriceFont'

import Recommend from 'pages/home/children/Recommend'
import Rank from 'pages/home/children/Rank'

import {getHomeData} from 'network/modules/home'

export default {
  name: 'Home',
  components: {
    Navbar,Banner,Recommend,Rank,PriceFont
  },
  data() {
    return {
      arr: [1,2,3],
      bannerMsg: {
        pagination: true,
        // paginationColor: '#fdde4a',
        navigation: true,
        navigationColor: '#fdde4a'
      },
      recommendMsg: [],
      bannerImg: [],
      rankMsg: [],
    }
  },
  created(){
    getHomeData().then(res=>{
      // console.log(res)
      const data = res.data
      this.recommendMsg = data.gridsV2
      this.bannerImg = data.banners.map(key=>{return key.imageUrl})
      this.rankMsg = data.topList
      // console.log(data.topList)
    })   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: var(--mainColor);
  color: var(--mainFontColor);
}
.home{
  background-color: #f5f5f5
}
.recommend{
  margin-bottom: 10px;
}
</style>
