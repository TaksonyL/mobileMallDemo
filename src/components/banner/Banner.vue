<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,key) in bannerImg" :key='key'>
        <img class="bannerImg" :src="item" alt=""/>
      </swiper-slide> 
      <div v-if="bannerConfig.pagination" class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div v-if="bannerConfig.navigation" class="bannerBtn">
      <div :style="{color : bannerConfig.navigationColor}" class="swiper-button-prev swiper-button"></div>
      <div :style="{color : bannerConfig.navigationColor}" class="swiper-button-next swiper-button"></div>
    </div>
  </div>
</template>

<script>
// import VueAwesomeSwiper from 'vue-awesome-swiper';


import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css';


export default {
  name: 'Banner',
  components: {
    Swiper,SwiperSlide
  },
  props: {
    bannerImg: {
      type: Array
    },
    bannerMsg: {
      type: Object,
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        observer:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 2000
        }
      },

      bannerDefault: {
        pagination: false,
        navigation: false,
        navigationColor: 'blue'     
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    bannerConfig(){
      const bannerConfig = Object.assign({},this.bannerDefault,this.bannerMsg)
      // console.log(bannerConfig)
      return bannerConfig
    }
  },
  methods: {
    
  },
  mounted(){
    // console.log(this.swiper)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  position: relative;
}
.bannerBtn{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  
}
.swiper-button{
  color: black
}
.bannerImg{
  width: 100%;
}
.swiper-button:focus{
  outline: none;
}
.swiper-pagination{
  --swiper-pagination-color: var(--mainColor);
}
</style>
