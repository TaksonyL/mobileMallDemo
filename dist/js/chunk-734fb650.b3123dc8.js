(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-734fb650"],{"3f51":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category"},[e("Navbar",{staticClass:"navbar"},[e("div",{attrs:{slot:"navCenter"},slot:"navCenter"},[t._v(" 分类 ")])]),e("div",{staticClass:"cateContent"},[e("scroll",{staticClass:"cateMeun",attrs:{data:t.categoryList,scrollbar:!1,bounce:!1}},[e("cate-menu",{attrs:{categoryList:t.categoryList},on:{cateId:t.getCateId}})],1),e("scroll",{ref:"scrollRight",staticClass:"cateRight",attrs:{data:t.goodList}},[e("cate-list",{directives:[{name:"show",rawName:"v-show",value:1!=t.cateId,expression:"cateId!=1"}],attrs:{listTitle:"查看更多"}},t._l(t.categories,(function(a){return e("li",{key:a.id,staticClass:"categoriesItem",on:{click:function(e){return t.toCommodity(a.url)}}},[e("img",{attrs:{src:a.imageUrl,alt:""}}),e("p",[t._v(t._s(a.title))])])})),0),e("cate-list",{attrs:{listTitle:"大家都在逛"}},t._l(t.goodList,(function(a,s){return 1==a.type?e("good-item",{key:s,staticClass:"goodItem",attrs:{goodMsg:a,saleNumShow:!1}}):t._e()})),1)],1)],1)],1)},i=[],c=(e("c975"),e("ac1f"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cateMenu"},t._l(t.categoryList,(function(a){return e("div",{key:a.id,staticClass:"cateMenuItem",class:[a.id==t.cateActive?"cateActive":""],on:{click:function(e){return t.cateHit(a.id)}}},[e("span",{staticClass:"cateMenuText"},[t._v(t._s(a.name))])])})),0)}),n=[],o={name:"CateMenu",props:{categoryList:Array},data:function(){return{cateActive:1}},methods:{cateHit:function(t){this.cateActive=t,this.$emit("cateId",this.cateActive)}}},r=o,l=(e("e38c"),e("2877")),u=Object(l["a"])(r,c,n,!1,null,"3970fcfc",null),d=u.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cateList"},[e("split-line",[e("span",[t._v(t._s(t.listTitle))])]),e("div",{staticClass:"categories"},[t._t("default")],2)],1)},p=[],g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"splitLine"},[e("span",{staticClass:"line"}),e("span",{staticClass:"dot"}),e("span",{staticClass:"text"},[t._t("default")],2),e("span",{staticClass:"dot"}),e("span",{staticClass:"line"})])},v=[],m={name:"SplitLine",props:{msg:String}},h=m,C=(e("6f5a"),Object(l["a"])(h,g,v,!1,null,"084772cf",null)),y=C.exports,b={name:"CateList",components:{SplitLine:y},props:{listTitle:String}},_=b,L=(e("8ce4"),Object(l["a"])(_,f,p,!1,null,"9157cf20",null)),w=L.exports,I=e("1808"),x=e("b3df"),k=e("f5a4"),O=e("1bab");function M(){return Object(O["a"])({url:"http://www.xmyxapp.com/api/tabs?sa="})}function $(t){var a="http://www.xmyxapp.com/api/tab/"+t;return Object(O["a"])(a)}var j={name:"Category",components:{Navbar:I["a"],Scroll:x["a"],CateMenu:d,CateList:w,GoodItem:k["a"]},data:function(){return{categoryList:[],categories:[],goodList:[],cateId:1}},methods:{getCateId:function(t){this.cateId=t,this.handleCategoryInfo(t),this.$refs.scrollRight.scrollTo(0,0,0)},handleCategoryList:function(t){this.categoryList=t.data.list},handleCategoryInfo:function(t){var a=this;$(t).then((function(t){a.categories=t.data.categories,a.goodList=t.data.items.list}))},toCommodity:function(t){var a=/\d+/.exec(t),e="";a=a[0],t.indexOf("category")>-1?e="category":t.indexOf("column")>-1&&(e="column");var s={type:e,id:a};this.$router.push({path:"/commodity",query:s})}},created:function(){var t=this;M().then((function(a){t.handleCategoryList(a)})),this.handleCategoryInfo(1)}},A=j,S=(e("f735"),Object(l["a"])(A,s,i,!1,null,"1767b130",null));a["default"]=S.exports},"6f5a":function(t,a,e){"use strict";var s=e("7589"),i=e.n(s);i.a},7589:function(t,a,e){},"8ce4":function(t,a,e){"use strict";var s=e("c186"),i=e.n(s);i.a},ba72:function(t,a,e){},c0c4:function(t,a,e){},c186:function(t,a,e){},e38c:function(t,a,e){"use strict";var s=e("ba72"),i=e.n(s);i.a},f735:function(t,a,e){"use strict";var s=e("c0c4"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-734fb650.b3123dc8.js.map