<template>
  <div class="commodity">
    <navbar class="navbar">
      <div slot="navCenter">
        {{commodityTitle}}
      </div>
    </navbar>
    <scroll class="scroll" ref="scroll" :data='goodList.list' :bounce="true" :scrollbar="true" :pullup="true" :listenScroll='true' :toTopConfig='{toTop: true}' :probeType='3' @scrollToEnd='goodListUpdate()'>
      <div class="goodList">
        <good-item class="goodItem" v-for="(item,key) in goodList.list" v-if="item.type == 1" :key='key' :goodMsg='item'/>
      </div>
    </scroll>
    
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'
import Scroll from 'components/scroll/Scroll'
import GoodItem from 'components/common/GoodItem'

import {getCommodityData,commodityUpdata} from 'network/modules/commodity'

export default {
  name: 'Commodity',
  components: {
    Navbar,GoodItem,Scroll
  },
  data() {
    return {
      commodityTitle: null,
      query: null,
      goodList: {}
    }
  },
  props: {

  },
  methods: {
    handleCommodityData(res) {
      if(this.query.type == 'column'){
        this.commodityTitle = "本周上新"
        this.goodList = res.data
      }else if(this.query.type == 'category'){
        this.commodityTitle = res.data.categoryName
        this.goodList = res.data.items
      }
    },
    goodListUpdate() {
      let start = this.goodList.nextIndex
      commodityUpdata(this.query.type,this.query.id,start).then(res=>{
        if(this.query.type == 'column'){
          this.goodList.nextIndex = res.data.nextIndex
          this.goodList.list.push(...res.data.list)
        }else if(this.query.type == 'category'){
          this.goodList.nextIndex = res.data.items.nextIndex
          this.goodList.list.push(...res.data.items.list)
        }
        this.$refs.scroll.finishPullUp()
        this.$refs.scroll.refresh()
      })
    }
  },

  created() {
    this.query = this.$route.query
    console.log(this.query)
    getCommodityData(this.query.type,this.query.id).then((res)=>{
      this.handleCommodityData(res)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: var(--mainColor);
  color: var(--mainFontColor);
}

.goodList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goodItem{
  width: 49%;
  box-shadow: 0 1px 3px -1px rgba(0,0,0,.5);
  margin-top: 8px;
  display: inline-block
}

.scroll{
  height: calc(100vh - 95px);
}
</style>
