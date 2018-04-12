<template>
  <div>
    <div class="head">我的</div>
    <div class="user">
      <b-scroll class="user-content">
        <div>
          <span class="top-margin"></span>
          <div class="shop cell-group">
            <b-cell :size="2">
              <img slot="icon" class="b-cell_icon" src="./avatar.png" width="54" height="54">
              <template slot="title">
                <span class="text">{{ shopName }}</span>
                <span class="label" :class="{danger: !auth, success: auth}">{{ authState }}</span>
              </template>
              <slot>
                <i class="value icon icon-qr-code"></i>
              </slot>
            </b-cell>
            <b-cell title="切换门店" :value="shopName" :border="false"></b-cell>
          </div>

          <div class="cell-group color-o">
            <b-cell title="账号设置" icon="people_fill" :value="phone"></b-cell>
            <b-cell title="收银员管理" icon="people-r"></b-cell>
            <b-cell title="设备管理" icon="link"></b-cell>
            <b-cell title="高级服务" icon="diamond" :border="false"></b-cell>
          </div>

          <div class="cell-group color-b">
            <b-cell title="收款方式" icon="documents"></b-cell>
            <b-cell title="收银设置" icon="setup"></b-cell>
            <b-cell title="积分规则" icon="integral" :border="false"></b-cell>
          </div>

          <div class="cell-group color-b">
            <b-cell title="关于我们" icon="favorite" :border="false"></b-cell>
          </div>
        </div>
      </b-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'base/b-scroll/b-scroll'
  import BCell from 'base/b-cell/b-cell'

  export default {
    data() {
      return {
        shopName: '77uu7788',
        auth: false,
        phone: '13586948026'
      }
    },
    computed: {
      authState() {
        return this.auth ? '已认证' : '未认证'
      }
    },
    components: {
      BCell,
      BScroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .head
    height: 48px
    line-height: 48px
    text-align: center
    font-size: $font-size-large
    background: $color-background-top

  .user
    position: fixed
    top: 48px
    bottom: 48px
    width: 100%
    background: $color-background-d
    .user-content
      height: 100%
      overflow: hidden
      .top-margin
        display: block
        height: 10px
      .shop
        background: $color-background
        .b-cell
          .b-cell_icon
            border-radius: 50%
          .title
            .label
              margin-top: 14px
              padding: 4px
              font-size: $font-size-small-sl
              border-radius: 4px
              &.danger
                color: $color-dander
                border: 1px solid $color-dander
              &.success
                color: $color-success
                border: 1px solid $color-success
          .right
            .icon-qr-code
              font-size: 26px
              color: #666666
      .cell-group
        margin-bottom: 10px
        &.color-o
          .b-cell_icon
            color: $color-user-o
        &.color-b
          .b-cell_icon
            color: $color-user-blue
</style>
