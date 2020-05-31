<template>
  <div v-if="priceMsg" :style="{fontSize : priceHandle.floatSize , fontWeight : priceDefault.fontWeight}" class="priceFont">
    ¥<span :style="{fontSize : priceHandle.intSize}">{{priceHandle.int}}</span>{{priceHandle.float}}
  </div>
</template>

<script>
export default {
  name: 'PriceFont',
  props: {
    priceMsg: {
      price: Number,
      intSize: String,
      floatSize: String,
      fontWeight: Number
    }
  },
  data() {
    return {
      priceDefault: {
        price: '11.1',
        intSize: '16px',
        floatSize: '14px',
        fontWeight: 500
      }
    }
  },
  computed: {
    priceHandle() {
      if( this.priceMsg ){
        Object.assign(this.priceDefault,this.priceMsg)
      }
      const {price,intSize,floatSize,fontWeight} = this.priceDefault
      let priceNum = this.priceDefault.price*1
      priceNum = priceNum.toString()
      let [int,float] = priceNum.split('.')
      if(!float){
        float = ''
      }else{
        float = '.'+float
      }
      return {int,float,intSize,floatSize,fontWeight}
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.priceFont{
  color: #fa585a;
  /* display: inline-block; */
}
</style>
