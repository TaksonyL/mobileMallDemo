<template>
  <div class="login">
    <navbar>
      <div slot="navCenter">
        登录
      </div>
    </navbar>
    <div class="loginWrap">
      <input class="loginInput" v-model="loginForm.username" type="text" name="" id="username" placeholder="username">
      <input class="loginInput" v-model="loginForm.password" type="password" name="" id="password" placeholder="password" @keyup.enter='handleLogin()'>
      <button class="loginBtn" @click="handleLogin()">登录</button>
    </div>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'

import {checkLoginForm} from 'network/modules/login.js'

export default {
  name: 'Login',
  components: {
    Navbar
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      if(this.loginForm.username){
        if(this.loginForm.password){
          checkLoginForm(this.loginForm).then(res => {
            this.$store.dispatch('setToken',res).then(res => {
              this.$router.push('/user')
            })
          })
          this.loginForm.password = ''
        }else{
          alert('请输入密码')
        }
      }else{
        alert('请输入用户名')
      }
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: var(--mainColor);
  color: var(--mainFontColor);
}

.loginWrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.loginInput{
  width: 80vw;
  height: 40px;
  border: 1px rgba(66,66,66,.3) solid;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 5px;
}
.loginBtn{
  width: 60vw;
  height:40px;
  border-radius: 20px;
  border-style: none;
  background-color: var(--mainColor);
  color: var(--mainFontColor);
  outline: none;
}
</style>
