<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <keep-alive exclude="Detail,Commodity,Category,Shopcar">
      <router-view/>
    </keep-alive>
    <Tabbar :tabbar='tabbar' :tabbarConfig='tabbarConfig' :tabList='tabList'/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Tabbar from './components/tabbar/Tabbar'
import Home from './pages/home/Home'

export default {
  name: 'App',
  components: {
    HelloWorld,Tabbar
  },
  data(){
    return {
      tabbar: [
        {
          text: '首页',
          path: '/home',
          img: 'images/tabbar/home0.png',
          imgAct: '/images/tabbar/home.png'
        },
        {
          text: '分类',
          path: '/category',
          img: 'images/tabbar/category0.png',
          imgAct: '/images/tabbar/category.png'
        },
        {
          text: '购物车',
          path: '/shopcar',
          img: '/images/tabbar/shopcar0.png',
          imgAct: '/images/tabbar/shopcar.png'
        },
        {
          text: '我的',
          path: '/user',
          img: '/images/tabbar/user0.png',
          imgAct: '/images/tabbar/user.png'
        }
      ],
      tabbarConfig: {
        backgroundColor: 'var(--mainColor)',
        textColorAll: 'var(--mainFontColor)',
        textColorAllAct: 'white'
      },
      tabList: ['/home','/user','/shopcar','/category','/commodity','/login']
    }
  }
}
</script>


<style>
@import url('./assets/css/base.css');
#app{
  width: 100%;
  height: 500px;
  /* background-color: var(--mainColor); */
}
</style>
