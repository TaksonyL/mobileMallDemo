<template>
  <div class="navbar">
    <div class="navLeft">
      <slot name="navLeft"/>
    </div>
    <div class="navCenter">
      <slot name="navCenter"/>
    </div>
    <div class="navRight">
      <slot name="navRight"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  height: 46px;
  width: 100%;
  line-height: 46px;
  /* background-color: blue; */
  display: flex;
}
.navLeft, .navRight{
  width: 50px;
}
.navCenter{
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold
}
</style>
