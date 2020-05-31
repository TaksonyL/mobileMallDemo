<template>
  <div class="goodInfo">
    <p class="goodTitle"><img v-if="goodInfo.isFreePostage" src="@/assets/images/freePostage.png" alt="">{{goodInfo.title}}</p>
    <p class="goodPrice">现价：<price-font class="priceFont" :priceMsg="{price:goodInfo.price,intSize:'30px',floatSize:'20px',fontWeight:700}"/></p>
    <p class="goodOther">
      <span class="oldPrice">原价¥<span style="text-decoration:line-through">{{goodInfo.originPrice}}</span></span>
      <span class="saleNum">月销量：{{goodInfo.saleNum}}</span>
    </p>
  </div>
</template>

<script>
import PriceFont from 'components/priceFont/PriceFont'


export default {
  name: 'GoodInfo',
  components: {
    PriceFont,
  },
  props: {
    goodInfo : Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goodInfo{
  padding: 10px;
}

.goodTitle{
  color: #43240c;
  font-size: 16px;
  line-height: 18px;
}
.goodTitle img{
  display: inline-block;
  height: 18px;
  margin: 0 5px -3px 0;
}

.goodPrice{
  font-size: 18px;
  color: red;
  margin: 10px 0
}
.priceFont{
  display: inline-block;
}

.goodOther{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #b1a9a5
}
</style>
