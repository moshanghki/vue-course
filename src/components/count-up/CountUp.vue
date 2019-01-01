<template>
  <div>
    <slot name="left"></slot>
    <span :id="eleId" :class="countClass"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup.js'
export default {
  name: 'CountUp',
  data () {
    return {
      counter: {}
    }
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return ['count-up-class', this.className]
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: true
    },
    useGrouping: {
      type: Boolean,
      default: false
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      console.log('val changed')
      this.counter.update(newVal)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      this.counter.start()
    })
  }
}
</script>

<style scoped>

</style>
