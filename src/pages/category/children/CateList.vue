<template>
  <div class="cateList">
    <split-line>
      <span>{{listTitle}}</span>
    </split-line>
    <div class="categories">
      <slot/>
    </div>
  </div>
</template>

<script>
import SplitLine from './SplitLine'

export default {
  name: 'CateList',
  components: {
    SplitLine
  },
  props: {
    listTitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categories{
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  width: 100%;
}
</style>
