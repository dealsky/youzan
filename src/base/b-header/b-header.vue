<template>
  <div class="header">
    <i v-if="back" class="icon icon-back" @click="backActions()"></i>
    <i v-if="close" class="icon icon-close"></i>
    <span class="title">{{ title }}</span>
    <span v-if="right" class="right"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      back: {
        type: Boolean,
        default: true
      },
      close: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      right: {
        type: String,
        default: ''
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
    display: flex
    align-items: center
    height: 48px
    background: $color-background-top
    z-index: 500
    .icon
      display: inline-block
      margin-right: 20px
      padding: 10px
      font-size: 22px
    .title
      flex: 1
      font-size: $font-size-medium-x
    .right
      margin-right: 10px
</style>
