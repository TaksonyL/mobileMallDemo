(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4b12896"],{"3e21":function(t,i,e){"use strict";var a=e("6b77"),n=e.n(a);n.a},"49e4":function(t,i,e){"use strict";var a=e("4bbd"),n=e.n(a);n.a},"4b79":function(t,i,e){"use strict";var a=e("a580"),n=e.n(a);n.a},"4bbd":function(t,i,e){},"64bf":function(t,i,e){"use strict";var a=e("b9ec"),n=e.n(a);n.a},"6b77":function(t,i,e){},"7db0":function(t,i,e){"use strict";var a=e("23e7"),n=e("b727").find,o=e("44d2"),c=e("ae40"),s="find",r=!0,l=c(s);s in[]&&Array(1)[s]((function(){r=!1})),a({target:"Array",proto:!0,forced:r||!l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},"8d06":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"detail"},[e("back"),e("scroll",{ref:"scroll",staticClass:"scroll",attrs:{data:t.goodArticle,bounce:!0,scrollbar:!1,pullup:!0,listenScroll:!0,toTopConfig:{toTop:!0},probeType:3}},[e("banner",{ref:"banner",attrs:{bannerImg:t.bannerImg,bannerMsg:t.bannerMsg,bannerHight:t.bannerHight}}),t.goodInfo?e("good-info",{attrs:{goodInfo:t.goodInfo}}):t._e(),e("good-article",{attrs:{goodArticle:t.goodArticle}})],1),e("detail-tabbar",{staticClass:"detailTabbar"},[e("div",{ref:"addCartBrn",staticClass:"detailTabbarItem",on:{click:function(i){return t.addCart(t.goodInfo.id)}}},[t._v("加入购物车 "),t._l(t.addCountShow,(function(i,a){return e("span",{key:a,staticClass:"addCount"},[t._v("+1")])}))],2),e("div",{staticClass:"detailTabbarItem"},[t._v("立即购买")])])],1)},n=[],o=(e("7db0"),e("d81d"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"back",on:{click:function(i){return t.goBack()}}})}),c=[],s={name:"Back",props:{msg:String},methods:{goBack:function(){this.$router.back()}}},r=s,l=(e("d0cf"),e("2877")),d=Object(l["a"])(r,o,c,!1,null,"33578a1c",null),u=d.exports,g=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"goodInfo"},[a("p",{staticClass:"goodTitle"},[t.goodInfo.isFreePostage?a("img",{attrs:{src:e("8e86"),alt:""}}):t._e(),t._v(t._s(t.goodInfo.title))]),a("p",{staticClass:"goodPrice"},[t._v("现价："),a("price-font",{staticClass:"priceFont",attrs:{priceMsg:{price:t.goodInfo.price,intSize:"30px",floatSize:"20px",fontWeight:700}}})],1),a("p",{staticClass:"goodOther"},[a("span",{staticClass:"oldPrice"},[t._v("原价¥"),a("span",{staticStyle:{"text-decoration":"line-through"}},[t._v(t._s(t.goodInfo.originPrice))])]),a("span",{staticClass:"saleNum"},[t._v("月销量："+t._s(t.goodInfo.saleNum))])])])},b=[],f=e("90e6"),p={name:"GoodInfo",components:{PriceFont:f["a"]},props:{goodInfo:Object}},A=p,h=(e("64bf"),Object(l["a"])(A,g,b,!1,null,"d65ac1aa",null)),m=h.exports,I=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"goodArticle"},[t._m(0),e("div",{staticClass:"articleKContent"},t._l(t.goodArticle,(function(i,a){return 1==i.type?e("img",{key:a,attrs:{src:i.photo.url,alt:""}}):t._e()})),0)])},C=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticClass:"articleHeader"},[e("span",{staticClass:"line"}),t._v("图文详情"),e("span",{staticClass:"line"})])}],v={name:"GoodArticle",props:{goodArticle:Array}},k=v,G=(e("4b79"),Object(l["a"])(k,I,C,!1,null,"3eca7373",null)),w=G.exports,D=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"detailTabbar"},[t._t("default")],2)},M=[],R={name:"DetailTabbar",props:{msg:String},methods:{addCart:function(){console.log("1")}}},N=R,F=(e("3e21"),Object(l["a"])(N,D,M,!1,null,"e7621f7e",null)),S=F.exports,Z=e("4c65"),J=e("b3df"),W=e("1bab"),j={name:"Detail",components:{Back:u,Banner:Z["a"],GoodInfo:m,GoodArticle:w,Scroll:J["a"],DetailTabbar:S},props:{msg:String},data:function(){return{id:null,bannerImg:[],bannerMsg:{pagination:!0,paginationColor:"#007aff"},bannerHight:null,goodInfo:{},goodArticle:[],addCountShow:[]}},methods:{getGoodData:function(t){return Object(W["a"])({url:"http://www.xmyxapp.com/api/detail",method:"get",params:{id:t}})},goodData:function(t){var i=this;Object(W["a"])({url:"http://www.xmyxapp.com/api/detail",method:"get",params:{id:t}}).then((function(t){var e=t.data,a=e.detail;e.shop;i.bannerImg=a.photo.map((function(t){return t.url})),i.goodArticle=a.descContentList,i.goodInfo={id:a.id,title:a.title,isFreePostage:a.isFreePostage,price:a.price,originPrice:a.originPrice,saleNum:a.saleNum,image:a.image}}))},bannerWidth:function(){this.bannerHight=this.$refs.banner.$el.offsetWidth},addCart:function(t){var i=this,e=this.$store.state.cartList.find((function(i){return i.id==t}));if(e)this.$store.commit("cartAddCount",e);else{var a=this.goodInfo,n=a.id,o=a.title,c=a.price,s=a.image,r={id:n,title:o,price:c,image:s,count:1,checked:!0};this.$store.commit("cartAddNew",r)}this.addCountShow.push(1);var l=0;l=setTimeout((function(){i.addCountShow.shift()}),1e3),clearTimeout(l)}},created:function(){this.id=this.$route.params.id,this.goodData(this.id)},mounted:function(){this.bannerWidth()}},x=j,y=(e("49e4"),Object(l["a"])(x,a,n,!1,null,"9c48db74",null));i["default"]=y.exports},"8e86":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAvCAYAAABuWa03AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDY0QjJFNzU2Qjk4MTFFNzkwM0FCMTk4NkYzMUM3RTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDY0QjJFNzY2Qjk4MTFFNzkwM0FCMTk4NkYzMUM3RTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENjRCMkU3MzZCOTgxMUU3OTAzQUIxOTg2RjMxQzdFOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENjRCMkU3NDZCOTgxMUU3OTAzQUIxOTg2RjMxQzdFOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu3eOnMAAASVSURBVHja7FxNaNRAFJ6ui+Ax+C+IkoMevAi5iCJ4yKLgQVS2qNCT2D2IiIh2LehNzeJd2MWDp6IuInpQsQFFUQSNJxVFG6woepAGPahorb4hL3YIm2lmMrtJ2nzwsds0nUy+vHk/mZn2nR0+SiIwD7gRuB64HLiQFODhO/AD8C3wLvBbp5PKEccOAIeBk0Ab+B7oFppy0QdcCewHjgBbwNPALzzBVwGvAn8D9wEfFDpKYTXwJPAFsAq8H/yixJy0BAWmFr2pEDsR3gH3o6e4BqyEBS/hLy4D68CpQjMluAHcC7yEVv9f8AHgAhS7gFrcAV4AnmF9+HHkHwUX0NBv2RkItLQvBn53U+wPFXucxkhq4WuAy4C3FTU+CGwCx4BDKQtOxR5FVlPsx1fgLeAOauEbgA8VWjcrcjuHLkAXeDgNgXZpErK5jEXNZ0WdHULRCeahbk4Ft2KeW8UMxItx7ifqSUqYsE8qGr6BdXtzKAB7Mc/7RWNmWeGFm8x3F325KjgYhNOoHqNiVDCKhVBW6EqMkLUbCm+8PoPgVsT1tJBQJqd9J2ZfTMay22kIbgj4vG5mI2YM36xzgr1oQG0LuBNlguuYcrGW0lAkohlqOw7sDiPBigjiuoTbY7OXlsxNJRGcWsUVxjraCsWWhd2hDxbTPzv0QEUFH2RiiiPTwVICsUcZv0kvXuuikFlIL03GJbVkGykpENtDsT3FN6hJpF7dRJXpS88EpyI/DYldwWN/JcmLD1mBxgieyG2KCq4zlheI7ZDZj8FQrJKGaNBsoz+1InJXJ2aFaSnO03vlTpyk8UQmS3EIM4PRocyNUxGK+uS0fXgLq0sDP2u9FDwNOAJD3+SMKk+i2GGzkiZew0kjD+9FGiZTiOmcgJ/Uyk10L1ZalWbW0O1Ks4aia9hubTYJrgm6k15Umh62b+Hf1kWtXLXgRsz3H4bAOV7GDKHNPMSqqC8vd8EqTUUPLktlffg1gztDvOiZ4G6SsjciYGZxmi4Q3MiC4KKlL+34GGM5WuhG8jgRnemg6WJgNDoM0UZGLVyXjS9ZyVJaHQqRtOYx4xRXukQGlTnBZ8IYWjxvRZfOCdqGRKakYXWpRRRW7bwKHreCbKLodY71DXJKe1F4+HCHOhyvy7i7vAhuhm6213m3F4o5tmw/VAnuMsPZIGrfkWshq+X5dZFJ7LiT1I7K+1EluM2IMoo/O4rErjJ+0yX5nfDoCwSnm38WJWysQaYX/wQiqV6tSodwP2fYiz5km3ReWdUtLAZOUMGfAw8qcCkVMv0+WiPqZnSC9JC3OLSVAwtfB3xJBX9E/PXha4GvE1pgg6S/NkXFSLK74E52AgfoJDJdOXuR+NsEC0xPIVYUtrmH+Ps4Hwez9nQ/4Xbg1kJv5aDe4xzm8lOB4BPE3201QvI1m5510Fh2HXW9SQ+w61JoOncIP48A5xd6JcI24BPqRoAnovJw+iReAc8DDxN/3yYNIONEzS6J2Y6lxP//BLuIvy/zGGrKLXyeEX+j1RbgbuAp4AoitqxgLuIH8CPwDRos3UL/U6TSvIcsoBD/BBgAutkVlEak9oYAAAAASUVORK5CYII="},a580:function(t,i,e){},b9ec:function(t,i,e){},c798:function(t,i,e){},d0cf:function(t,i,e){"use strict";var a=e("c798"),n=e.n(a);n.a}}]);
//# sourceMappingURL=chunk-d4b12896.fead8700.js.map