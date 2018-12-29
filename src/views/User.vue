<template>
  <div class="user"></div>
</template>

<script>
import {getUserInfo} from '../api/user'
export default {
  name: 'User',
  created () {
    getUserInfo({userId: 'u001'}).then(res => {
      console.log('user page:')
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>
