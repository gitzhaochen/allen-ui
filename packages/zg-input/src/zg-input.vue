<template>
  <div class="zgInput">这是一个zgInput组件</div>
</template>
<script>
export default {
  name: 'ZgInput',
  data() {
    return {}
  },
  mounted() {
    const abc = Object.assign({}, { y: 'ZgInput' })
    console.warn(abc)
  }
}
</script>
<style lang="stylus">
.zgInput{
  border 1px solid #f00
  font-size 20px
}
</style>
