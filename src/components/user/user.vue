<template>
  <div>
    <div class="head">我的</div>
    <div class="user">
      <b-scroll class="user-content">
        <div>
          <span class="top-margin"></span>
          <div class="shop">
            <div class="management">
              <img class="avatar" src="./avatar.png" width="54" height="54">
              <div class="content">
                <p class="name">{{ shopName }}</p>
                <span class="auth" :class="{danger: !auth, success: auth}">{{ authState }}</span>
              </div>
              <div class="icon-wrapper">
                <i class="icon icon-qr-code"></i>
                <i class="icon icon-arrow"></i>
              </div>
            </div>
            <div class="item">
              <span class="title">切换门店</span>
              <span class="name">{{ shopName }}</span>
              <i class="icon-arrow"></i>
            </div>
          </div>
          <ul class="setup-first">
            <li class="item">
              <i class="icon icon-people_fill"></i>
              <div class="content">
                <span class="title">账号设置</span>
                <span class="name">{{ phone }}</span>
                <i class="icon-arrow"></i>
              </div>
            </li>
            <li class="item">
              <i class="icon icon-people-r"></i>
              <div class="content">
                <span class="title">收银员管理</span>
                <i class="icon-arrow"></i>
              </div>
            </li>
            <li class="item">
              <i class="icon icon-link"></i>
              <div class="content">
                <span class="title">设备管理</span>
                <i class="icon-arrow"></i>
              </div>
            </li>
            <li class="item">
              <i class="icon icon-diamond"></i>
              <div class="content">
                <span class="title">高级服务</span>
                <i class="icon-arrow"></i>
              </div>
            </li>
          </ul>
          <ul class="setup-second">
            <li class="item">
              <i class="icon icon-documents"></i>
              <div class="content">
                <span class="title">收款方式</span>
                <i class="icon-arrow"></i>
              </div>
            </li>
            <li class="item">
              <i class="icon icon-setup"></i>
              <div class="content">
                <span class="title">收银设置</span>
                <i class="icon-arrow"></i>
              </div>
            </li>
            <li class="item">
              <i class="icon icon-integral"></i>
              <div class="content">
                <span class="title">积分规则</span>
                <i class="icon-arrow"></i>
              </div>
            </li>
          </ul>
          <ul class="setup-third">
            <li class="item">
              <i class="icon icon-favorite"></i>
              <div class="content">
                <span class="title">关于我们</span>
                <i class="icon-arrow"></i>
              </div>
            </li>
          </ul>
        </div>
      </b-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'base/b-scroll/b-scroll'

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
        .management
          position: relative
          padding: 21px 15px
          box-sizing: border-box
          display: flex
          height: 100px
          .avatar
            border-radius: 50%
          .content
            flex: 1
            margin-left: 15px
            font-size: 0
            .name
              margin-top: 5px
              font-size: $font-size-medium-x
              color: $color-text-ll
            .auth
              display: inline-block
              margin-top: 12px
              padding: 4px
              font-size: $font-size-small-sl
              border-radius: 4px
              &.danger
                color: $color-dander
                border: 1px solid $color-dander
              &.success
                color: $color-success
                border: 1px solid $color-success
          .icon-wrapper
            position: absolute
            right: 10px
            font-size: 0
            vertical-align: center
            line-height: 75px
            .icon-qr-code
              margin-right: 12px
              font-size: 26px
              color: #666666
            .icon-arrow
              display: inline-block
              transform: rotate(-180deg)
              font-size: 26px
              color: $color-border-l
        .item
          position: relative
          padding-left: 15px
          border-top: 1px solid $color-border-d
          height: 46px
          line-height: 46px
          background: $color-background
          .title
            font-size: $font-size-medium-x
            color: $color-text-ll
          .name
            position: absolute
            right: 48px
            line-height: 46px
            font-size: $font-size-medium-x
            color: $color-text-d
          .icon-arrow
            position: absolute
            right: 10px
            transform: rotate(-180deg)
            line-height: 46px
            font-size: 26px
            color: $color-border-l
      ul
        &.setup-first
          .icon
            color: $color-user-o
        &.setup-second, &.setup-third
          .icon
            color: $color-user-blue
        margin-top: 10px
        .item
          display: flex
          height: 46px
          background: $color-background
          .icon
            display: inline-block
            margin: 0 15px
            line-height: 46px
            font-size: 24px
          &:last-child
            .content
              border-bottom: none
          .content
            position: relative
            flex: 1
            border-bottom: 1px solid $color-background-d
            .title
              font-size: $font-size-medium-x
              line-height: 46px
              color: $color-text-ll
            .name
              position: absolute
              right: 52px
              line-height: 46px
              font-size: $font-size-medium-x
              color: $color-text-d
            .icon-arrow
              position: absolute
              right: 10px
              transform: rotate(-180deg)
              line-height: 46px
              font-size: 26px
              color: $color-border-l
</style>
