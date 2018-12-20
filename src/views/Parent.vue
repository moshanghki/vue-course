<template>
  <div class="parent">
    Parent page
    <div class="child">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parent'
}
</script>

<style scoped lang="stylus">
  .parent
    position: relative
    width: 300px;
    height: 120px;
    left: 50%;
    margin-left: -150px;
    background-color: aquamarine
    .child
      position: absolute
      width: 100px;
      height: 100px;
      right: 0;
      bottom: 0;
</style>
