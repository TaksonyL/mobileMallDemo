<template>
  <div class="shopcarCheck">
    <div class="checkWrap">
      <span class="checked" v-show="isCheck"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopcarCheck',
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopcarCheck{
  display: flex;
  align-items: center;
  padding: 0 8px;
}

.shopcarCheck .checkWrap{
  width: 20px;
  height: 20px;
  border: 2px #ddd solid;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shopcarCheck .checked{
  display: inline-block;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  background-color: var(--mainColor);
  border-radius: 50%
}
</style>
