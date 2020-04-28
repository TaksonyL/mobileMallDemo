<template>
  <div class="rank">
    <div class="rankSide">
      <img src="~assets/images/rank/rankImg.png" alt="">
    </div>
    <!-- <div class="rankList"> -->
      <swiper class="rankList" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="rankItem" v-for="(item, key) in rankMsg" :key='key'>
          <img v-if="key <= 2" class="bannerTag" :src="tagImg[key]" alt="">
          <img class='bannerImg' :src="item.image" alt=""/>
          <p class="title">{{item.title}}</p>
          <!-- <p class="price">{{'¥' + item.price}}</p> -->
          <price-font class="priceFont" :priceMsg="{price : item.price}"/>
        </swiper-slide>
        <swiper-slide class="rankItem">
          <p>更多商品</p>
          <p></p>
          <p>see-more</p>
        </swiper-slide>
      </swiper>
    <!-- </div> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import PriceFont from 'components/priceFont/PriceFont'

export default {
  name: 'Rank',
  components: {
    Swiper,SwiperSlide,PriceFont
  },
  props: {
    rankMsg: {
      type: Array
    }
  },
  data() {
    return {
      tagImg: [
        require("../../../assets/images/rank/top1.png"),
        require("../../../assets/images/rank/top2.png"),
        require("../../../assets/images/rank/top3.png")
      ],
      bannerImg: [],
      swiperOptions: {
        // observer:true,
        // cssWidthAndHeight: true
        spaceBetween : 10,
        slidesPerView : "auto",
        observer:true,
        observeParents:true,
        slidesOffsetAfter : 50,
      },
    }
  },
  created(){
    // console.log(this.bannerImg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rank{
  height: 150px;
  width: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
.rankSide{
  width: 44px;
  height: 100%;
  background-color: #fee44e;
  text-align: center;
}
.rankSide img{
  width: 75%;
  margin-top: 25px
}

.rankList{
  height: 100%;
  flex: 1;
  margin-left: 20px;
  /* overflow: hidden; */
  width: 550px;
}
.rankItem{
  width: 90px !important;
  position: relative;
}
.bannerImg{
  width: 100%;
}
.bannerTag{
  width: 30%;
  position: absolute;
}
.rankList .title{
  font-size: 12px;
  color: #43240c;
  height: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rankList .priceFont{
  text-align: center;
}

.rankItem:last-child{
  /* background-color: #333; */
  height: 100px;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.rankItem:last-child p:nth-child(1){
  font-size: 16px;
  color: #fda900;
  line-height: 24px;
}
.rankItem:last-child p:nth-child(2){
  height: 1px;
  width: 100%;
  background-color: #d9d9d9
}
.rankItem:last-child p:nth-child(3){
  font-size: 14px;
  color: #d9d9d9;
}
.rankItem:last-child p{
  text-align: center;
}
</style>
