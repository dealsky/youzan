<template>
  <transition name="slide">
    <div class="coupon" ref="coupon">
      <b-header title="优惠券" right="添加优惠券"></b-header>
      <Tab v-model="tabIndex"
           :line-width="4"
           active-color="black"
           default-color="#9A9A9A"
           bar-active-color="#EE9900"
           custom-bar-width="56px">
        <tab-item v-for="(item, index) in tabItemList" :key="index">{{ item }}</tab-item>
      </Tab>
      <swiper v-model="tabIndex"
              :show-dots="false"
              :duration="200"
              :height="contentHeight"
              class="swiper">
        <swiper-item v-for="(item, index) in itemList" class="item" :key="index">
          {{ item }}
        </swiper-item>
      </swiper>
    </div>
  </transition>
</template>

<script>
  import BHeader from 'base/b-header/b-header'
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'

  const height = window.innerHeight - 44 - 48

  export default {
    data() {
      return {
        tabIndex: 0,
        contentHeight: height + 'px',
        tabItemList: ['全部', '进行中', '未开始', '已结束'],
        itemList: []
      }
    },
    created() {
    },
    components: {
      BHeader,
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .coupon
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    z-index: 100
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition: all .3s
    &.slide-enter
      transform: translate3d(0, 30px, 0)
    &.slide-leave-to
      transform: translate3d(0, 50px, 0)
      opacity: 0
    .vux-tab
      background: #FAFAFA
      .vux-tab-item
        font-size: $font-size-medium
        font-weight: bold
    .swiper
      .item
        color: #000
</style>
