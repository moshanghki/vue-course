<template>
  <div class="store">
    <h2>store page</h2>
    <p>appName: {{appName}} - appNameWithVersion: {{appNameWithVersion}}</p>
    <p>userName: {{userName}} - firstLetterOfName: {{firstLetterOfName}}</p>
    <button @click="handleClick">修改appName</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Store',
  data () {
    return {}
  },
  computed: {
    ...mapState(['appName']),
    ...mapGetters(['appNameWithVersion', 'firstLetterOfName']),
    userName () {
      return this.$store.state.user.userName
    }
  },
  methods: {
    ...mapMutations(['UPDATE_APP_NAME']),
    handleClick () {
      this.UPDATE_APP_NAME('newApp')
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
