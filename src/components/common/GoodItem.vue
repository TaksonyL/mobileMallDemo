<template>
  <div class="goodItem" v-if="goodMsg" @click="toDetail(goodMsg.id)">
    <div class="imgWrap">
      <img :src="goodMsg.image" alt="">
    </div>
    <div class="infoWrap" v-if="goodMsg.type==1">
      <p class="title">{{goodMsg.title}}</p>
      <p class="text"><span><price-font class="priceFont" :priceMsg="{price:goodMsg.price,intSize:'20px',floatSize:'12px'}"/><span v-if="saleNumShow">{{saleNum}}人已买</span></span><span v-if="goodMsg.isFreePostage">包邮</span></p>
    </div>
  </div>
</template>

<script>
import PriceFont from 'components/priceFont/PriceFont'

export default {
  name: 'GoodItem',
  components: {
    PriceFont
  },
  props: {
    goodMsg: {

    },
    saleNumShow: {
      default: true,
      type: Boolean
    }
  },
  computed: {
    good() {
      if(this.goodMsg){
        return this.goodMsg[0]
      }
    },
    saleNum() {
      if(this.goodMsg){
        let num = this.goodMsg.saleNum
        if( num <= 9999){
          return num
        }else{
          num = num/10000
          num = num.toFixed(1)
          return num+'万'
        }
      }
    }
  },

  methods: {
    toDetail(id) {
      this.$router.push('/detail/'+id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goodItem{
  background-color: white;
}

.imgWrap img{
  width: 100%;
}

.infoWrap{
  padding: 10px;
  color: #877a73;
  font-size: 12px;
}
.infoWrap .title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
}
.infoWrap .text{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.priceFont{
  display: inline-block;
  margin-right: 5px;
}
</style>
