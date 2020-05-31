<template>
  <div class="shopcar">
    <Navbar class="navbar">
      <div slot="navCenter">
        购物车({{shopcarList.length}})
      </div>
    </Navbar>
    <scroll class="scroll" ref="scroll" :data='shopcarList' :bounce="true" :scrollbar="true" :toTopConfig='{toTop: true}'>
      <div class="shopcarEmpty" v-if="shopcarList.length == 0">
        <img src="@/assets/images/shopcar.png" alt="">
        <p>购物车空空如也，去逛逛吧~</p>
      </div>
      <shopcar-item class="shopcarItem" v-for="item in shopcarList" :key='item.id' :goodMsg='item'/>
    </scroll>
    <shopcar-bar>
    </shopcar-bar>
  </div>
</template>

<script>
import ShopcarItem from './children/ShopcarItem'
import ShopcarBar from './children/ShopcarBar'

import Navbar from 'components/navbar/Navbar'
import Scroll from 'components/scroll/Scroll'


export default {
  name: 'Shopcar',
  components: {
    Navbar,ShopcarItem,Scroll,ShopcarBar
  },
  data(){
    return {
      // shopcarList: []
    }
  },
  computed: {
    shopcarList() {
      return this.$store.state.cartList
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

.shopcar{
  background-color: #f5f5f5;
  height: 100vh;
}

.shopcarEmpty{
  text-align: center;
  box-sizing: border-box;
  padding: 70px 0;
}
.shopcarEmpty img{
  width: 90px;
}
.shopcarEmpty p{
  font-size: 16px;
  margin-top: 10px;
  color: var(--mainFontColor)
}

.scroll{
  height: calc(100vh - 145px);
}
.shopcarItem{
  margin-bottom: 10px
}
</style>
