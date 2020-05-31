<template>
  <div class="splitLine">
      <span class="line"></span>
      <span class="dot"></span>
      <span class="text">
        <slot/>
      </span>
      <span class="dot"></span>
      <span class="line"></span>
  </div>
</template>

<script>
export default {
  name: 'SplitLine',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.splitLine{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  width: 100%;
}
.splitLine .line{
  display: inline-block;
  width: 12%;
  height: 1px;
  background-color: var(--mainColor)
}
.splitLine .dot{
  display: inline-block;
  width: 0;
  height: 0;
  border: 3px var(--mainColor) solid;
  transform: rotate(45deg)
}
.splitLine .text{
  margin: 0 10px;
  color: hsla(21, 8%, 49%, .7);
  font-size: 12px;
}
</style>
