<template>
  <div class="category">
    <Navbar class="navbar">
      <div slot="navCenter">
        分类
      </div>
    </Navbar>
    <div class="cateContent">
      <scroll class="cateMeun" :data='categoryList' :scrollbar="false" :bounce="false">
        <cate-menu :categoryList='categoryList' @cateId='getCateId'/>
      </scroll>
      <scroll class="cateRight" ref="scrollRight" :data='goodList'>
        <cate-list v-show="cateId!=1" :listTitle="'查看更多'">
          <li class="categoriesItem" v-for="item in categories" :key="item.id" @click='toCommodity(item.url)'>
            <img :src="item.imageUrl" alt="">
            <p>{{item.title}}</p>
          </li>
        </cate-list>
        <cate-list :listTitle="'大家都在逛'">
          <good-item class="goodItem" v-for="(item,key) in goodList" v-if="item.type == 1" :key='key' :goodMsg='item' :saleNumShow="false"/>
        </cate-list>
      </scroll>
    </div>
  </div>
</template>

<script>
import CateMenu from './children/CateMenu'
import CateList from './children/CateList'

import Navbar from 'components/navbar/Navbar'
import Scroll from 'components/scroll/Scroll'
import GoodItem from 'components/common/GoodItem'

import {getCategoryList,getCategoryInfo} from 'network/modules/category'

export default {
  name: 'Category',
  components: {
    Navbar,Scroll,CateMenu,CateList,GoodItem
  },
  data() {
    return {
      categoryList: [],
      categories: [],
      goodList: [],
      cateId: 1
    }
  },
  methods: {
    getCateId(e) {
      this.cateId = e
      this.handleCategoryInfo(e)
      this.$refs.scrollRight.scrollTo(0,0,0)
    },
    handleCategoryList(res) {
      this.categoryList = res.data.list
    },
    handleCategoryInfo(id) {
      getCategoryInfo(id).then(res=>{
        this.categories = res.data.categories
        this.goodList = res.data.items.list
        // console.log(this.goodList)
      })
    },
    toCommodity(e) {
      // console.log(e)
      let id = /\d+/.exec(e)
      let type = ''
      id = id[0]
      if(e.indexOf('category') > -1){
        type = 'category'
      }else if(e.indexOf('column') >-1){
        type = 'column'
      }
      let query = {type,id}
      // console.log(params)
      this.$router.push({path:'/commodity',query})
    }
  },

  created() {
    getCategoryList().then(res=>{
      this.handleCategoryList(res)
    })

    this.handleCategoryInfo(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: var(--mainColor);
  color: var(--mainFontColor);
}
.scroll{
  height: 500px;
}


.cateMenuWrap{
  height: calc(100vh - 95px);
}

.cateContent{
  display: flex;
}
.cateMeun{
  height: calc(100vh - 95px);
  overflow: hidden;
}
.cateRight{
  height: calc(100vh - 95px);
  flex: 1
}

.categoriesItem{
  display: inline-block;
  text-align: center;
  font-size: 12px;
  color: #877a73;
  width: 25%;
  margin-bottom: 20px;
}
.categoriesItem img{
  width: 48px;
  margin-bottom: 5px;
}

.goodItem{
  width: calc((100vw - 78px)/2);
  /* width: 20%; */
  box-sizing: border-box;
  margin: 0 2px 5px;
  display: inline-block;
  box-shadow: 0 1px 3px -1px rgba(0,0,0,.5);
}
</style>
