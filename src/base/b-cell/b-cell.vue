<template>
  <div class="b-cell">
    <div class="cell-wrapper" :class="{'border-bottom': !icon}">
      <slot name="icon">
        <b-icon class="b-cell_icon" v-if="icon" :icon="icon"></b-icon>
      </slot>
      <div class="b-cell_content" :class="{'border-bottom': icon}">
        <slot name="title">
          <span class="text">{{ title }}</span>
        </slot>
        <div class="right">
          <slot>
            <span class="value">{{ value }}</span>
          </slot>
          <slot name="right-icon">
            <b-icon v-if="isLink" class="right-icon" icon="arrow"></b-icon>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BIcon from 'base/b-icon/b-icon'

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      isLink: {
        type: Boolean,
        default: true
      },
      link: {
        type: String,
        default: ''
      }
    },
    components: {
      BIcon
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .b-cell
    height: 46px
    background: $color-background
    .cell-wrapper
      display: flex
      align-items: center
      padding: 0 10px 0 15px
      height: 100%
      &.border-bottom
        border-bottom: 1px solid $color-border-d
      .b-cell_icon
        margin-right: 15px
        font-size: 20px
      .b-cell_content
        display: flex
        flex: 1
        align-items: center
        justify-content: space-between
        height: 100%
        &.border-bottom
          border-bottom: 1px solid $color-border-d
        .text
          font-size: $font-size-medium-x
          color: $color-text-ll
        .right
          display: flex
          align-items: center
          .value
            font-size: $font-size-medium-x
            color: $color-text-d
          .right-icon
            margin-left: 16px
            transform: rotate(-180deg)
            font-size: 26px
            color: $color-border-l
</style>
