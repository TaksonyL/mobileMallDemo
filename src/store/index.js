import Vue from 'vue'
import Vuex from 'vuex'
import {addCookie,getCookie} from 'assets/js/cookie'
import { get } from 'https';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    loginToken: null
  },

  mutations: {
    cartAddNew(state,payload) {
      state.cartList.push(payload)
    },
    cartAddCount(state,payload) {
      // console.log(payload)
      payload.count++
    },
    cartSubCount(state,payload) {
      payload.count--
    },
    cartRemove(state,payload) {
      let num = state.cartList.indexOf(payload)
      state.cartList.splice(num,1)
    },
    cartCheck(state,payload) {
      payload.checked = !payload.checked
    },

    // setToken(state,payload) {
    //   console.log(payload)
    //   // let str = 'token='+payload
    //   // document.cookie = str
    //   // let cookies = document.cookie
    //   addCookie('token',payload,0)
    // }
  },

  actions: {
    setToken(context,args) {
      console.log(args)
      let token = {
        val: 'admin',
        SameSite: 'Lax'
      }
      context.state.loginToken = token
      addCookie('token',token,0)
    },
    removeToken(context) {
      addCookie('token','',-1)
      context.state.loginToken = null
    }
  }
})