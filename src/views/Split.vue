<template>
  <div class="pane">
    <split-pane :value.sync="value">
      <span slot="left">left</span>
      <span slot="right">right</span>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '@/components/split-pane/SplitPane'
export default {
  name: 'Split',
  data () {
    return {
      value: 0.5
    }
  },
  components: {
    SplitPane
  }
}
</script>

<style scoped lang="stylus">
  .pane
    width: 500px
    height: 220px
    background-color aqua
</style>
