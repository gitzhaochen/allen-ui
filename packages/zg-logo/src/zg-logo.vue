<template>
  <div class="zglogo">这是一个zglogo组件</div>
</template>
<script>
export default {
  name: 'ZgLogo',
  data() {
    return {}
  },
  mounted() {
    const abc = Object.assign({}, { x: 1 })
    console.warn(abc)
  }
}
</script>
<style lang="stylus" scoped></style>
