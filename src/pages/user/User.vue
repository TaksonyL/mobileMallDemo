<template>
  <div class="user">
    <navbar>
      <div slot="navCenter">
        我的
      </div>
    </navbar>
    <user-detail/>
    <button class="outBtn" @click="outLine()">退出</button>
  </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar'

import UserDetail from './children/UserDetail'
import { constants } from 'zlib';


export default {
  name: 'User',
  components: {
    Navbar,UserDetail
  },
  methods: {
    outLine() {
      // console.log('1')
      this.$store.dispatch('removeToken').then(
        this.$router.push('/login')
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: var(--mainColor);
  color: var(--mainFontColor);
}

.user{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.outBtn{
  width: 60vw;
  height: 50px;
  border: none;
  background-color: var(--mainColor);
  color: var(--mainFontColor);
  font-size: 16px;
  border-radius: 30px;
}
</style>
