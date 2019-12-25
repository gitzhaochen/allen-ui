<template>
  <div class="zg-logo">这是一个zglogo组件</div>
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
<style lang="stylus" scoped>
.zg-logo{
  color $c1
  font-size 20px
}
</style>
