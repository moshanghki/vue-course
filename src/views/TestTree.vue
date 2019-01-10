<template>
  <div class="test-tree">
    <ul>
      <li v-for="(item, index) of list" :key="index">
        {{item.menuName}}
        <test-tree v-if="item.children && item.children.length" :list="item.children"></test-tree>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TestTree',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
