<template>
  <i :class="iconName"></i>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      icon: {
        type: String,
        default: ''
      }
    },
    computed: {
      iconName() {
        return 'icon-' + this.icon
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  i
    display: inline-block
</style>
