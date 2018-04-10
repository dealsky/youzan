<template>
  <div class="commodity">
    <b-header :title="title"></b-header>
  </div>
</template>

<script type="text/ecmascript-6">
  import BHeader from 'base/b-header/b-header'
  export default {
    data() {
      return {
        title: '商品管理'
      }
    },
    components: {BHeader}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .commodity
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    z-index: 100
    background: $color-background
</style>
