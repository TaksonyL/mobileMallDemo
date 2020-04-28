<template>
  <div class="shopcar">
    <Navbar class="navbar">
      <div slot="navCenter">
        购物车
      </div>
    </Navbar>
    <h1>shopcar</h1>
    <h1>shopcar</h1>
    <h1>shopcar</h1>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'

export default {
  name: 'Shopcar',
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: var(--mainColor);
  color: var(--mainFontColor);
}
</style>
