<template>
  <div class="back" @click="goBack()">
  </div>
</template>

<script>
export default {
  name: 'Back',
  props: {
    msg: String
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back{
  width: 37px;
  height: 37px;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
  border-radius: 50%;
  background-image: url('../../../assets/images/back.png');
  background-repeat: no-repeat;
  background-size: 25%;
  background-position: 50%
}
</style>
