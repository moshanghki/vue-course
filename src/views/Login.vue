<template>
  <div class="login">
    用户名：<input type="text" v-model="userName"><br>
    密  码：<input type="password" v-model="password"><br>
    <button @click="handleClick">login</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    handleClick () {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(() => {
        console.log('login success')
        this.$router.push({
          name: 'HelloWorld'
        })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
