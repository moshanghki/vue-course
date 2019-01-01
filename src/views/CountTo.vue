<template>
  <div class="count-to">
    <count-up :end-val="value">
      <span slot="left">总金额：</span>
      <span slot="right">元</span>
    </count-up>
    <button @click="handleClick">改变value的值</button>
  </div>
</template>

<script>
import CountUp from '@/components/count-up/CountUp'
export default {
  name: 'CountTo',
  data () {
    return {
      value: 100
    }
  },
  components: {
    CountUp
  },
  methods: {
    handleClick () {
      this.value += Math.random() * 100
    }
  }
}
</script>

<style scoped>

</style>
