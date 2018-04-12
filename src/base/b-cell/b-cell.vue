<template>
  <div @click="select" class="b-cell" :class="{'border-bottom': border && !icon}" ref="cell">
    <div class="cell-wrapper">
      <slot name="icon">
        <b-icon class="b-cell_icon" v-if="icon" :icon="icon"></b-icon>
      </slot>
      <div class="b-cell_content" :class="{'border-bottom': border && icon}">
        <div class="title">
          <slot name="title">
            <span class="text">{{ title }}</span>
            <span v-if="label" class="label">{{ label }}</span>
          </slot>
        </div>
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

  const largeHeight = 92

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      label: {
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
      },
      size: {
        type: Number,
        default: 1
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      setTimeout(() => {
        this._initCell()
      }, 20)
    },
    methods: {
      select() {
        if (!this.isLink) {
          return
        }
        this.$router.push(this.link)
      },
      _initCell() {
        if (this.size === 2) {
          this.$refs.cell.style.height = `${largeHeight}px`
        }
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
    &.border-bottom
      border-bottom: 1px solid $color-border-d
    .cell-wrapper
      display: flex
      align-items: center
      padding-left: 15px
      height: 100%
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
        .title
          display: flex
          flex-direction: column
          .text
            font-size: $font-size-medium-x
            color: $color-text-ll
          .label
            align-self: baseline
            margin-top: 5px
            font-size: $font-size-small
            color: $color-text-d
        .right
          display: flex
          align-items: center
          margin-right: 10px
          .value
            font-size: $font-size-medium-x
            color: $color-text-d
          .right-icon
            margin-left: 16px
            transform: rotate(-180deg)
            font-size: 26px
            color: $color-border-l
</style>
