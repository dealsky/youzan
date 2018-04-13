<template>
  <div class="no-result">
    <div class="no-result-icon"></div>
    <p class="no-result-text">{{ title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .no-result
    text-align: center
    .no-result-icon
      width: 100px
      height: 100px
      margin: 0 auto
      background-image: url("./no-result.png")
      background-size: 100px 100px
    .no-result-text
      margin-top: 20px
      font-size: $font-size-medium
      color: $color-text-ll
</style>
