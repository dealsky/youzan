<template>
  <b-transition>
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
              :height="contentHeight"
              class="swiper">
        <swiper-item v-for="(item, index) in tabItemList" class="item" :key="index">
          <div v-show="showNoResult(index)" class="no-result-wrapper">
            <b-no-result title="暂无优惠券"></b-no-result>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </b-transition>
</template>

<script>
  import BHeader from 'base/b-header/b-header'
  import BNoResult from 'base/b-no-result/b-no-result'
  import BTransition from 'base/b-transition/b-transition'
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
      this.itemList = [[], [], [], []]
    },
    methods: {
      showNoResult(index) {
        return this.itemList[index].length === 0
      }
    },
    components: {
      BNoResult,
      BHeader,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      BTransition
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
    .vux-tab
      background: #FAFAFA
      .vux-tab-item
        font-size: $font-size-medium
        font-weight: bold
    .swiper
      .item
        color: #000
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
