<template>
  <transition name="slide">
    <slot></slot>
  </transition>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: transform .4s cubic-bezier(0.23, 1, 0.32, 1), opacity .4s cubic-bezier(0.23, 1, 0.32, 1)

  .slide-enter, .slide-leave-active
    transform: translate3d(0, 30px, 0)
    opacity: 0
</style>
