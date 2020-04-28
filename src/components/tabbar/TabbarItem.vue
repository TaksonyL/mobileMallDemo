<template>
  <li class="tabbarItem" @click='routerTo(tabbarItem.path)'>
    <img v-if="!isActive" :src="tabbarItem.img" alt="">
    <img v-else :src="tabbarItem.imgAct" alt="">
    <p :style='isActive? {color: tabbarItem.textColorAct}:{color: tabbarItem.textColor}'>{{tabbarItem.text}}</p>
  </li>
</template>

<script>
export default {
  name: 'TabbarItem',
  computed:{
    isActive(){
      // console.log(this.$route.path.indexOf(this.tabbarItem.path) !== -1)
      return this.$route.path.indexOf(this.tabbarItem.path) !== -1
    }
  },
  props: {
    tabbarItem: {
      type: Object
    }
  },
  data(){
    return {
      
    }
  },
  methods: {
    routerTo(path){
      if( this.$route.path !== path ){
        this.$router.replace(path);
        // console.log(path)
        console.log('1')
      }      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbarItem{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tabbarItem img{
  height: 24px;
  width: 24px;
}

.tabbarItem p{
  margin: 0;
  font-size: 12px;
  color: #ffffff;
}
</style>
