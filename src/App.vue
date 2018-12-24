<template>
  <div id="app">
    <router-link to="/">Welcome</router-link>
    <!-- 命名路由 -->
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link to="/parent/child">Child</router-link>
    <router-link to="/named_view">命名视图</router-link>
    <router-link to="/store">vuex</router-link>
    <img src="./assets/logo.png">
    <!-- 命名视图 -->
    <router-view/>
    <router-view name="email"></router-view>
    <router-view name="tel"></router-view>
    <!-- js操作路由 -->
    <button @click="handleClick('type1')">跳转到argu-1</button>
    <button @click="handleClick('type2')">跳转到argu-2</button>
    <button @click="handleClick('type3')">跳转到argu-3</button>
    <button @click="handleClick('food')">跳转到food</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // path 会忽略params的内容
    handleClick (type) {
      const id = 'type1'
      if (type === 'type1') {
        this.$router.push(`/argu/${id}`)
      } else if (type === 'type2') {
        this.$router.push({
          name: 'argu',
          params: {
            id: 'type2'
          }
        })
      } else if (type === 'type3') {
        this.$router.push({
          name: 'argu', // 或者 path: '/argu'
          query: {
            id: 'type3'
          }
        })
      } else if (type === 'food') {
        this.$router.push({
          path: '/food',
          query: {
            food: 'banana'
          }
        })
      }
    }
  }
}
</script>

<style>
img{
  display: block;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
