<template>
  <div class="detailTabbar">
    <!-- <div class="detailTabbarItem" @click='addCart'>加入购物车</div>
    <div class="detailTabbarItem">立即购买</div> -->
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'DetailTabbar',
  props: {
    msg: String
  },
  methods: {
    addCart() {
      console.log('1')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detailTabbar{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  line-height: 49px;
}

</style>
