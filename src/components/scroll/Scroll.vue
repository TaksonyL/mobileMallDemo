<template>
  <div class="scrollWrap" ref="scrollWrap">
    <div class="srollContent">
      <slot/>
    </div>
    <to-top @click.native="toTop()" v-show="toTopShow" v-if="toTopConfigDefault.toTop"/>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import ToTop from './ToTop'

export default {
  name: 'Scroll',
  components: {
    ToTop
  },
  data() {
    return {
      toTopConfigDefault: {
        toTop: true,
        time: 1000,
        toTopShpw: -1000
      },
      toTopShow: false
    }
  },
  props: {
    // 回到顶部 功能参数
    toTopConfig: {
      toTop: Boolean,
      time: Number,
      toTopShow: Number
    },

    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 0
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    },

    //回弹
    bounce: {
      type: Boolean,
      default: true
    },

    scrollbar: {
      type: Boolean | Object,
      default: false
    }
  },
  mounted() {
    // console.log(scroll)
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.scrollWrap,{})
    // })
    this.$nextTick(() => {
      this.initScroll()
      this.initToTop()
    })
    
  },
  methods: {
    initScroll() {
      if(!this.$refs.scrollWrap) {
        return
      }

      this.scroll = new BScroll(this.$refs.scrollWrap,{
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        bounce: this.bounce,
        scrollbar: this.scrollbar,
        // disableMouse: false
        mouseWheel: true
      })

      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }

      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          // 滚动到底部
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on('touchend', (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }

      
    },

    // 回到顶部初始
    initToTop() {
      // 监听回到顶部按钮
      if(this.toTopConfig) {
        Object.assign(this.toTopConfigDefault,this.toTopConfig)
        
        this.scroll.on('scroll', (pos) => {
          if( pos.y < this.toTopConfigDefault.toTopShpw ){
            this.toTopShow = true
          }else{
            this.toTopShow = false
          }
        })
      }
    },

    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },

    finishPullUp() {
      // 代理 上拉方法 完成
      this.scroll && this.scroll.finishPullUp()
    },


    // 点击回到顶部
    toTop() {
      this.scroll.scrollTo(0,0,this.toTopConfigDefault.time)
      this.toTopShow = false
    },
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      },this.refreshDelay)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollWrap{
  /* height: 100%; */
  /* height: 500px; */
  /* overflow: scroll; */
  overflow: hidden
}
</style>
