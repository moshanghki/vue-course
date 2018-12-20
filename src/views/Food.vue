<template>
  <div>
    {{food}}
  </div>
</template>

<script>
export default {
  name: 'Food',
  props: {
    food: {
      type: String,
      default: 'apple-default'
    }
  }
}
</script>

<style scoped>

</style>
