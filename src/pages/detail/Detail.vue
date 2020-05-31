<template>
  <div class="detail">
    <back/>
    <!-- <to-top/> -->
    <scroll class="scroll" ref="scroll" :data='goodArticle' :bounce="true" :scrollbar="false" :pullup="true" :listenScroll='true' :toTopConfig='{toTop: true}' :probeType='3'>
      <!-- {{this.$store.state.cartList}} -->
      <banner ref="banner" :bannerImg='bannerImg' :bannerMsg='bannerMsg' :bannerHight='bannerHight'/>
      <good-info v-if="goodInfo" :goodInfo='goodInfo'/>
      <good-article :goodArticle='goodArticle'/>
    </scroll>
    <detail-tabbar class="detailTabbar">
      <div class="detailTabbarItem" @click="addCart(goodInfo.id)" ref="addCartBrn">加入购物车
        <span class="addCount" v-for="(item,key) in addCountShow" :key="key">+1</span>
      </div>
      <div class="detailTabbarItem">立即购买</div>
    </detail-tabbar>
  </div>
</template>

<script>
import Back from './children/Back'
import GoodInfo from './children/GoodInfo'
import GoodArticle from './children/GoodArticle'
import DetailTabbar from './children/DetailTabbar'

import Banner from 'components/banner/Banner'
import Scroll from 'components/scroll/Scroll'

import {request} from 'network/request'


export default {
  name: 'Detail',
  components: {
    Back,Banner,GoodInfo,GoodArticle,Scroll,DetailTabbar
  },
  props: {
    msg: String
  },
  data() {
    return {
      id: null,
      bannerImg: [],
      bannerMsg: {
        pagination: true,
        paginationColor: '#007aff'
      },
      bannerHight: null,
      goodInfo: {},
      goodArticle: [],
      addCountShow: []
    }
  },
  methods: {
    getGoodData(id) {
      return request({
        url: 'http://www.xmyxapp.com/api/detail',
        method: 'get',
        params: {id}
      })
    },
    goodData(id) {
      request({
        url: 'http://www.xmyxapp.com/api/detail',
        method: 'get',
        params: {id}
      }).then(res => {
        let {detail,shop} = res.data
        this.bannerImg = detail.photo.map(item => {
          return item.url
        })
        this.goodArticle = detail.descContentList
        // console.log(this.goodArticle)
        // console.log(detail)
        this.goodInfo = {
          id : detail.id,
          title : detail.title,
          isFreePostage : detail.isFreePostage,
          price : detail.price,
          originPrice : detail.originPrice,
          saleNum : detail.saleNum,
          image : detail.image
        }
      })
    },

    bannerWidth() {
      this.bannerHight = this.$refs.banner.$el.offsetWidth
    },

    addCart(e) {
      let oldItem = this.$store.state.cartList.find(item => {
        return item.id == e
      })
      if(oldItem){
        this.$store.commit('cartAddCount',oldItem)
      }else{
        let {id,title,price,image} = this.goodInfo
        let cartItem = {
          id,title,price,image,count:1,checked:true
        }
        this.$store.commit('cartAddNew',cartItem)
      }
      // console.log(this.$store.state.cartList)



      this.addCountShow.push(1)
      let timer = 0
      timer = setTimeout(()=>{
        this.addCountShow.shift()
      },1000)
      clearTimeout(timer)
    }
  },

  created() {
    this.id = this.$route.params.id
    this.goodData(this.id)
  },
  mounted() {
    this.bannerWidth()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll{
  height: calc(100vh - 46px);
}

.detailTabbar{
  box-shadow: 0 -3px 1px 1px rgba(200, 200, 200, .5);
}
.detailTabbarItem{
  flex: 1;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
}
.detailTabbarItem:nth-child(1){
  background-color: #fdde4a;
  color: #6b4c10;
  position: relative;
}
.detailTabbarItem:nth-child(2){
  background-color: #fa585a;
  color: #ffffff;
}

@keyframes addCountShow{
  0%{
    opacity: .3;
    bottom: 15px;
  }
  60%{
    opacity: .8;
    bottom: 25px
  }
  100%{
    opacity: 0;
    bottom: 30px;
    display: none
  }
}
.detailTabbarItem .addCount{
  position: absolute;
  /* width: 100%; */
  /* left: 0; */
  left: 45%;
  bottom: 15px;
  font-size: 20px;
  font-weight: 700;
  color: red;
  animation: addCountShow ease-in 1s forwards;
}

</style>
