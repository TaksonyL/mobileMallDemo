<template>
  <div class="category">
    <Navbar class="navbar">
      <div slot="navCenter">
        分类
      </div>
    </Navbar>
    <h1>category</h1>
    <h1>category</h1>
    <h1>category</h1>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'

export default {
  name: 'Category',
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
