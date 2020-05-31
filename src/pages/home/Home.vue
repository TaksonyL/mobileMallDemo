<template>
  <div class="home">
    <Navbar class="navbar">
      <div slot="navCenter">
        首页
      </div>
    </Navbar>
    <scroll class="scroll" ref="scroll" :data='goods.list' :bounce="true" :scrollbar="true" :pullup="true" :listenScroll='true' @scrollToEnd='goodListUpdate()' :toTopConfig='{toTop: true}' :probeType='3'>
      <Banner :bannerImg='bannerImg' :bannerMsg='bannerMsg'/>
      <recommend class="recommend" :recommendMsg='recommendMsg'/>
      <rank :rankMsg='rankMsg'/>
      <div class="goodlist">
        <good-item class="good-item" ref="goodItem" v-for="(item,key) in goods.list" v-if="item.type == 1" :key='key' :goodMsg='item'/>
      </div>
    </scroll>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import Banner from 'components/banner/Banner'
import Scroll from 'components/scroll/Scroll'
import GoodItem from 'components/common/GoodItem'

import Recommend from 'pages/home/children/Recommend'
import Rank from 'pages/home/children/Rank'
// import GoodItem from 'pages/home/children/GoodItem'

import {getHomeData,goodUpdate} from 'network/modules/home'

export default {
  name: 'Home',
  components: {
    Navbar,Banner,Recommend,Rank,GoodItem,Scroll
  },
  data() {
    return {
      arr: [1,2,3],
      bannerMsg: {
        pagination: true,
        paginationColor: '#fdde4a',
        navigation: true,
        navigationColor: '#fdde4a'
      },
      recommendMsg: [],
      bannerImg: [],
      rankMsg: [],
      goods: {},
      scrollY: 0
    }
  },

  //生命函数
  created(){
    getHomeData().then(res=>{
      this.homeData(res)
    })
  },
  activated() {
    setTimeout(()=>{
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.scrollY,0)
    },0)
    
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.scroll.y
  },

  methods: {
    homeData(res) {
      const data = res.data
      this.recommendMsg = data.gridsV2
      this.bannerImg = data.banners.map(key=>{return key.imageUrl})
      this.rankMsg = data.topList
      this.goods = data.items
    },
    goodListUpdate() {
      let start = this.goods.nextIndex
      goodUpdate(start,0).then(res=>{
        this.goods.nextIndex = res.data.nextIndex
        this.goods.list.push(...res.data.list)

        this.$refs.scroll.finishPullUp()
        this.$refs.scroll.refresh()
      })
    }
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

.goodlist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px
}
.good-item{
  width: 49%;
  box-shadow: 0 1px 3px -1px rgba(0,0,0,.5);
  margin-top: 8px;
  display: inline-block
}


.scroll{
  height: calc(100vh - 95px);
}
</style>
