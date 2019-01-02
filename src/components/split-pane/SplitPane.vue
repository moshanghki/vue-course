<template>
  <div class="split-pane-container" ref="outer">
    <div class="pane pane-left" :style="{width:leftOffsetPercent}">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger"
         :style="{width: `${triggerWidth}px`,left:leftTrigger}"
         @mousedown="handleMouseDown"></div>
    <div class="pane pane-right" :style="{left:leftOffsetPercent}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  data () {
    return {
      canMove: false
    }
  },
  props: {
    triggerWidth: {
      type: Number,
      default: 8
    },
    minPercent: {
      type: Number,
      default: 0.1
    },
    maxPercent: {
      type: Number,
      default: 0.9
    },
    value: {
      type: Number,
      default: 0.5
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    leftTrigger () {
      return `calc(${this.leftOffsetPercent} - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMouseDown () {
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
      this.canMove = true
    },
    handleMouseMove (event) {
      if (!this.canMove) {
        return
      }
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX - outerRect.left) / outerRect.width
      if (offsetPercent < this.minPercent) {
        offsetPercent = this.minPercent
      }
      if (offsetPercent > this.maxPercent) {
        offsetPercent = this.maxPercent
      }
      // this.$emit('input', offsetPercent)
      this.$emit('update:value', offsetPercent)
    },
    handleMouseUp () {
      this.canMove = false
    }
  }
}
</script>

<style scoped lang="stylus">
  .split-pane-container
    width: 100%
    height: 100%
    position: relative
    .pane
      height: 100%
      position: absolute
      top: 0
      &-left
        background-color: darkcyan
      &-right
        background-color: yellow
        right: 0
        bottom: 0
      &-trigger
        position: absolute
        top: 0
        height: 100%
        background-color: red
        z-index: 9
        user-select: none
        cursor: col-resize
</style>
