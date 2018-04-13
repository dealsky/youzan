<template>
  <transition name="slide">
    <slot></slot>
  </transition>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all .3s

  .slide-enter
    transform: translate3d(0, 30px, 0)

  .slide-leave-to
    transform: translate3d(0, 50px, 0)
    opacity: 0
</style>
