<template>
  <div>
    <p>$route.params</p>
    {{$route.params.id}}
    <p>$route.query</p>
    {{$route.query}}
  </div>
</template>

<script>
export default {
  name: 'Argu'
}
</script>

<style scoped>

</style>
