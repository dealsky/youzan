<template>
  <div class="login" ref="login">
    <div class="img-wrapper">
      <img src="./top-backgrud.jpg">
    </div>
    <div class="box-group">
      <div class="box">
        <i class="icon icon-phone"></i>
        <input type="number" name="phoneNumber" placeholder="输入手机号码" v-model="phoneNumber">
        <i v-show="phoneNumber" @click="clearPhoneNumber" class="icon-close-r"></i>
      </div>
      <div class="box">
        <i class="icon icon-lock"></i>
        <input type="password" name="password" placeholder="输入密码" v-model="password">
        <i v-show="password" @click="clearPassword" class="icon-close-r"></i>
      </div>
      <span class="forget">忘记密码</span>
    </div>
    <div class="btn-wrapper">
      <button :class="{'active': phoneNumber && password}" class="login-btn" type="button">登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        phoneNumber: '',
        password: ''
      }
    },
    methods: {
      clearPhoneNumber() {
        this.phoneNumber = ''
      },
      clearPassword() {
        this.password = ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .login
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    background: $color-background
    .img-wrapper
      position: relative
      padding-top: 66%
      width: 100%
      height: 0
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
    .box-group
      padding: 0 30px
      background: $color-background
      .box
        position: relative
        display: flex
        align-items: center
        margin-bottom: 5px
        width: 100%
        height: 50px
        .icon
          margin-right: 20px
          color: #999
          font-size: 22px
        input
          flex: 1
          height: 40px
          border-bottom: 1px solid $color-border-dd
          font-size: $font-size-large
          color: #505050
          outline: none
          caret-color: #BEBEBE
          &::-webkit-input-placeholder
            font-size: $font-size-medium-x
            color: #BEBEBE
          &::-moz-placeholder
            font-size: $font-size-medium-x
            color: #BEBEBE
          &:-moz-placeholder
            font-size: $font-size-medium-x
            color: #BEBEBE
          &:-ms-input-placeholder
            font-size: $font-size-medium-x
            color: #BEBEBE
        .icon-close-r
          position: absolute
          right: 5px
          font-size: 20px
          color: #DBDBDB
      .forget
        float: right
        font-size: $font-size-medium
        color: #999
    .btn-wrapper
      position: absolute
      bottom: 25px
      left: 15px
      right: 15px
      z-index: -1
      .login-btn
        width: 100%
        height: 45px
        border: none
        border-radius: 5px
        font-size: $font-size-medium-x
        color: $color-text
        background: $color-btn-o
        opacity: 0.4
        &.active
          opacity: 1
</style>
