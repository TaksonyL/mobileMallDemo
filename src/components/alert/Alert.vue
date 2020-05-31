<template>
  <div class="alert" v-show="isAlert">
    <div class="alertMask">
      <div class="alertWrap">
        <div class="alertInfo">
          <slot name="alertInfoSlot"/>
        </div>
        <div class="alertBtn">
          <slot name="alertBtnSlot"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    isAlert: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alertMask{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}

.alertWrap{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  /* width: 70%; */
  /* height: 25%; */
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .3);
  padding: 20px;
}

.alertInfo{
  text-align: center;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
  padding: 0 0 20px;
}

.alertBtn{
  display: flex;
  justify-content: center
}
.alertBtn span{
  display: inline-block;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .05);
  height: 30px;
  width: 100px;
  text-align: center;
  border-radius: 20px;
}
</style>
