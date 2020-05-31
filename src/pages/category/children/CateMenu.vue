<template>
  <div class="cateMenu">
    <div class="cateMenuItem" v-for="item in categoryList" :key="item.id" :class="[item.id==cateActive?'cateActive':'']" @click='cateHit(item.id)'>
      <span class="cateMenuText">{{item.name}}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'CateMenu',
  props: {
    categoryList: Array
  },
  data() {
    return {
      cateActive: 1
    }
  },
  methods: {
    cateHit(e) {
      // console.log(e)
      this.cateActive = e
      this.$emit('cateId',this.cateActive)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cateMenu{
  display: inline-block;
}

.cateMenuItem{
  box-sizing: border-box;
  height: 60px;
  width: 70px;
  font-size: 12px;
  color: var(--mainFontColor);
  background-color: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 0
}
.cateMenuText{
  display: block;
  width: 25px;
  line-height: 20px;
}

.cateActive{
  color: #43240c;
  font-weight: 700;
  background-color: #ffffff;
  border-left: 3px #43240c solid
}
</style>
