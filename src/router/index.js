import Vue from 'vue';
import Router from 'vue-router';
import store from '../store'

const Home = () => import('pages/home/Home')
const Test = () => import('pages/test/Test')
const Category = () => import('pages/category/Category')
const Shopcar = () => import('pages/shopcar/Shopcar')
const User = () => import('pages/user/User')
const Detail = () => import('pages/detail/Detail')
const Commodity = () => import('pages/commodity/Commodity')
const Login = () => import('pages/login/Login')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcar',
    component: Shopcar,
    beforeEnter: (to,from,next) => {
      // let cookie = store.state.loginToken
      console.log(store.state.loginToken)
      if(store.state.loginToken){
        next()
      }else{
        next({path: '/login'})
      }
    }
  },
  {
    path: '/user',
    component: User,
    beforeEnter: (to,from,next) => {
      // let cookie = store.state.loginToken
      console.log(store.state.loginToken)
      if(store.state.loginToken){
        next()
      }else{
        next({path: '/login'})
      }
    }
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/commodity',
    component: Commodity
  },
  {
    path: '/login',
    component: Login
  }
]

export default new Router({
  routes,
  // mode: 'history'
})

