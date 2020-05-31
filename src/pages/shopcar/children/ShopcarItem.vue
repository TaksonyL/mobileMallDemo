<template>
  <div class="shopcarItem">
    <shopcar-check :isCheck='goodMsg.checked' @click.native="changeCheck(goodMsg)"/>
    <img class="itemImg" :src="goodMsg.image" alt="" @click="toDetail(goodMsg.id)">
    <div class="content">
      <p class="title"  @click="toDetail(goodMsg.id)">{{goodMsg.title}}</p>
      <p class="info">
        <price-font class="priceFont" :priceMsg="{price:goodMsg.price,intSize:'20px',floatSize:'12px'}"/>
        <span class="goodNum">
          <span :class="[goodMsg.count<=1? 'unSub' : '']" @click="subCount(goodMsg)">-</span><span>{{goodMsg.count}}</span><span @click="addCount(goodMsg)">+</span><span class="remove" @click="isAlert = true">移除</span>
        </span>
      </p>
    </div>
    <alert :isAlert='isAlert'>
      <p slot="alertInfoSlot">确认删除此商品？</p>
      <span class="alertButton" slot="alertBtnSlot" @click="isAlert = false">返回</span>
      <span class="alertButton" slot="alertBtnSlot" @click="removeGood(goodMsg)">删除</span>
    </alert>
  </div>
</template>

<script>
import PriceFont from 'components/priceFont/PriceFont'
import Alert from 'components/alert/Alert'

import ShopcarCheck from './ShopcarCheck'


export default {
  name: 'ShopcarItem',
  components: {
    PriceFont,ShopcarCheck,Alert
  },
  data() {
    return {
      isAlert: false
    }
  },
  props: {
    goodMsg: Object
  },
  methods: {
    toDetail(id) {
      this.$router.push('/detail/'+id)
    },
    addCount(e) {
      this.$store.commit('cartAddCount',e)
    },
    subCount(e) {
      if(e.count>1){
        this.$store.commit('cartSubCount',e)
      }
    },
    removeGood(e) {
      this.$store.commit('cartRemove',e)
    },
    changeCheck(e) {
      // console.log('11')
      this.$store.commit('cartCheck',e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopcarItem{
  display: flex;
  background-color: #fff;
  box-sizing: border-box;
  padding: 8px 0;
  box-shadow: 0 1px 3px -1px rgba(0,0,0,.5);
}

.shopcarItem .itemImg{
  width: 100px;
}

.shopcarItem .content{
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around
}
.shopcarItem .content .title{
  font-size: 16px;
  color: #43240c;
}

.shopcarItem .content .info{
  display: flex;
  align-items: center;
  justify-content: space-between
}
.shopcarItem .content .priceFont{
  display: inline-block
}
.shopcarItem .content .goodNum span{
  display: inline-block;
  height: 20px;
  width: 20px;
  background-color: #f7f7f7;
  line-height: 20px;
  text-align: center;
  margin: 0 1px;
  color: #555
}
.shopcarItem .content .goodNum .unSub{
  opacity: .3;
}
.shopcarItem .content .goodNum .remove{
  width: 40px;
  margin-left: 10px;
}

.alertButton:nth-child(1){
  border: 1px #ccc solid;
  color: #333;
  margin-right: 10px
}
.alertButton:nth-child(2){
  background-color: var(--mainColor);
  color: var(--mainFontColor);
}
</style>
