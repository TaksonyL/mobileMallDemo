<template>
  <div class="tabbar">
    <div class="tabbarWrap" :style="{backgroundColor: tabbarConfig.backgroundColor}">
      <tabbar-item v-for="(item,key) in tabbarChange" :key="key" :tabbarItem='item'/>
    </div>
  </div>
</template>

<script>
import TabbarItem from './TabbarItem'

export default {
  name: 'Tabbar',
  components: {
    TabbarItem
  },

  props: {
    tabbar: {
      type: Array,
      img: String,
      imgAct: String,
      text: String,
      path: String,
      textColor: String,
      textColorAct: String
    },
    tabbarConfig: {
      type: Object,
      default: function(){
        return {
          backgroundColor: 'green',
          textColorAll: '#fff',
          textColorAllAct: '#aaa'
        }
      }
    }
  },

  computed: {
    tabbarChange(){
      let tabbar = this.tabbar
      for(let item of tabbar){
        if( !item.textColor ){
          item.textColor = this.tabbarConfig.textColorAll
          item.textColorAct = this.tabbarConfig.textColorAllAct
        }
        if( !item.imgAct ){
          item.imgAct = item.img
        }
        // console.log(this.tabbarConfig)
      }
      return this.tabbar
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbarWrap{
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  /* background-color: pink; */
  display: flex;
  list-style: none;
}
</style>
 