<template>
  <b-transition>
    <div class="commodity">
      <b-header :title="title"></b-header>
    </div>
  </b-transition>
</template>

<script type="text/ecmascript-6">
  import BHeader from 'base/b-header/b-header'
  import BTransition from 'base/b-transition/b-transition'

  export default {
    data() {
      return {
        title: '商品管理'
      }
    },
    components: {
      BHeader,
      BTransition
    }
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
    &.slide-enter-active, &.slide-leave-active
      transition: all .3s
    &.slide-enter
      transform: translate3d(0, 30px, 0)
    &.slide-leave-to
      transform: translate3d(0, 50px, 0)
      opacity: 0
</style>
