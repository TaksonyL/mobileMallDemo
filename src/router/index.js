import Vue from 'vue';
import Router from 'vue-router';


const Home = () => import('pages/home/Home')
const Test = () => import('pages/test/Test')
const Category = () => import('pages/category/Category')
const Shopcar = () => import('pages/shopcar/Shopcar')
const User = () => import('pages/user/User')

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
    component: Shopcar
  },
  {
    path: '/user',
    component: User
  }
]

export default new Router({
  routes,
  mode: 'history'
})