<template>
  <div class="tabbar" v-show="tabbarShow">
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

  data() {
    return {
      tabbarShow: true
    }
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
    },
    tabList: {
      type: Array
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
        item.img = process.env.BASE_URL+item.img
        item.imgAct = process.env.BASE_URL+item.imgAct
        // console.log(this.tabbarConfig)
      }
      return this.tabbar
    }
  },

  watch: {
    $route(to,from) {
      if(this.tabList){
        this.tabList.indexOf(to.path) >  -1 ? this.tabbarShow = true : this.tabbarShow = false
      }
    }
  }

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
  box-shadow: 0 -1px 5px -1px rgba(0,0,0,.5);
}
</style>
 