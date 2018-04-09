<template>
  <div class="home">
    <div class="header">
      <ul class="item-list">
        <li class="item">
          <i class="icon icon-receipt"></i>
          <span class="text">收款</span>
        </li>
        <li class="item">
          <i class="icon icon-shopping_cart"></i>
          <span class="text">开单</span>
        </li>
        <li class="item">
          <i class="icon icon-scan"></i>
          <span class="text">扫一扫</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <ul class="item-list">
        <li class="item">
          <i class="icon icon-good"></i>
          <span class="text">商品管理</span>
        </li>
        <li class="item">
          <i class="icon icon-wallet"></i>
          <span class="text">我的收入</span>
        </li>
        <li class="item">
          <i class="icon icon-message_fill"></i>
          <span class="text">消息</span>
        </li>
        <li class="item">
          <i class="icon icon-qr-code"></i>
          <span class="text icon-">台卡</span>
        </li>
        <li class="item">
          <i class="icon icon-people_fill"></i>
          <span class="text">顾客</span>
        </li>
        <li class="item">
          <i class="icon icon-store_value"></i>
          <span class="text">会员充值</span>
        </li>
        <li class="item">
          <i class="icon icon-voucher"></i>
          <span class="text">优惠券</span>
        </li>
        <li class="item">
          <i class="icon icon-member_card"></i>
          <span class="text">会员卡</span>
        </li>
        <li class="item">
          <i class="icon icon-gift"></i>
          <span class="text">活动</span>
        </li>
        <li class="item">
          <i class="icon icon-recharge"></i>
          <span class="text">储值</span>
        </li>
        <li class="item">
          <i class="icon icon-notice"></i>
          <span class="text">会员通知</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .home
    .header
      width: 100%
      height: 180px
      background: $color-background-top
      .item-list
        display: flex
        align-items: center
        height: 100%
        .item
          display: inline-block
          flex: 1
          text-align: center
          color: $color-text-y
          .icon
            display: block
            margin-bottom: 12px
            font-size: 50px
          .text
            font-size: $font-size-small-l
    .content
      .item-list
        font-size: 0
        .item
          display: inline-block
          padding-top: 20px
          width: 33.3%
          text-align center
          .icon
            display: block
            font-size: 36px
            margin-bottom: 18px
            &.icon-good, &.icon-gift
              color: $color-red
            &.icon-wallet, &.icon-store_value, &.icon-voucher, &.icon-recharge
              color: $color-green
            &.icon-message_fill, &.icon-qr-code, &.icon-people_fill, &.icon-member_card, &.icon-notice
              color: $color-blue
          .text
            font-size: $font-size-medium
            color: $color-text-l
</style>
