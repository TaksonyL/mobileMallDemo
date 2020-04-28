<template>
  <div :style="{fontSize : priceHandle.floatSize}" class="priceFont">
    <!-- ¥<span :style="{fontSize : priceSize}">{{priceHandle.int}}</span>{{'.' + priceHandle.float}} -->
    ¥<span :style="{fontSize : priceHandle.intSize}">{{priceHandle.int}}</span>{{'.' + priceHandle.float}}
  </div>
</template>

<script>
export default {
  name: 'PriceFont',
  props: {
    priceMsg: {
      price: Number,
      intSize: String,
      floatSize: String
    }
  },
  data() {
    return {
      priceDefault: {
        price: '11.1',
        intSize: '16px',
        floatSize: '14px'
      }
    }
  },
  computed: {
    priceHandle() {
      if( this.priceMsg ){
        Object.assign(this.priceDefault,this.priceMsg)
      }
      const {price,intSize,floatSize} = this.priceDefault
      const priceNum = this.priceDefault.price.toString()
      const [int,float] = priceNum.split('.') 
      return {int,float,intSize,floatSize}
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
