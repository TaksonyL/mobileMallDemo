<template>
  <div class="shopcarBar">
    <span class="left" @click="allCheck()">
      <shopcar-check :isCheck='isAllCheck'/>
      <p>全选</p>
    </span>
    <span class="right">
      <span class="sum">总计：<span class="price">{{'¥'+allPrice}}</span></span>
      <span class="pay">去结算<span class="num">{{'('+cartList.length+')件'}}</span></span>
    </span>
  </div>
</template>

<script>
import ShopcarCheck from './ShopcarCheck'

export default {
  name: 'ShopcarBar',
  components: {
    ShopcarCheck
  },
  data(){
    return {
      isAllCheck: false
    }
  },
  computed: {
    cartList() {
      let list = this.$store.state.cartList.filter((item) => {
        return item.checked == true
      })
      if(list.length == this.$store.state.cartList.length){
        this.isAllCheck = true
      }else{
        this.isAllCheck = false
      }
      return list
    },
    allPrice() {
      if(this.cartList.length>0){
        let allPrice = this.cartList.reduce((x,y) => {
          return x + y.price*y.count  
        },0)
        return allPrice.toFixed(2)
      }else{
        return '0.00'
      }
    }
  },

  methods: {
    allCheck() {
      // let unCheckList = this.$store.state.cartList.find(item => {
      //   return item.checked == false
      // })
      // console.log(unCheckList)
      let allList = this.$store.state.cartList
      let checkedList = this.cartList.length
      if( allList.length > checkedList){
        let unCheckList = this.$store.state.cartList.filter(item => {
          return item.checked == false
        })
        unCheckList.forEach(item => {
          this.$store.commit('cartCheck',item)
        })
        console.log('选完')
        this.isAllCheck = true
      }else{
        allList.forEach(item => {
          this.$store.commit('cartCheck',item)
        })
        this.isAllCheck = false
        console.log('未选完')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopcarBar{
  height: 50px;
  width: 100%;
  background-color: hsla(0, 0%, 100%, .95);
  box-shadow: 0 -1px 3px -1px rgba(0,0,0,.3);
  display: flex;
  justify-content: space-between
}

.shopcarBar .left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shopcarBar .left p{
  font-size: 12px;
  color: #999999;
  margin-top: 3px
}

.shopcarBar .right{
  font-size: 16px;
  color: var(--mainFontColor);
  font-weight: 600;
  /* line-height: 50px; */
  display: flex;
  align-items: center;
}
.shopcarBar .right .price{
  color: #f2270c
}
.shopcarBar .right .pay{
  display: inline-block;
  background-color: var(--mainColor);
  color: var(--mainFontColor);
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 1px 3px 0px rgba(0,0,0,.3);
  margin: 0 8px
}
.shopcarBar .right .num{
  font-size: 12px;
}
</style>
