<template>
  <div class="header">
    <i class="icon icon-back" @click="backActions()"></i>
    <i v-if="close" class="icon icon-close"></i>
    <span class="title">{{ title }}</span>
    <div v-if="rightClick" class="right"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      close: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      rightClick: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      backActions() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .header
    z-index: 500
    height: 48px
    background: $color-background-top
    .icon
      display: inline-block
      padding: 9px
      margin-right: 12px
      line-height: 30px
      font-size: 22px
    .title
      display: inline-block
      vertical-align: top
      line-height: 48px
      font-size: $font-size-large
</style>
