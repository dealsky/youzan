<template>
  <div class="tab">
    <span class="line border-1px"></span>
    <div class="content">
      <router-link tag="div" class="tab-item" to="/home" @click.native="selectItem(0)">
        <div class="icon">
          <i :class="priceCls"></i>
        </div>
        <span class="text">收银</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/bill" @click.native="selectItem(1)">
        <div class="icon">
          <i :class="orderCls"></i>
        </div>
        <span class="text">流水</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/user" @click.native="selectItem(2)">
        <div class="icon">
          <i :class="peopleCls"></i>
        </div>
        <span class="text">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const home = 0
  const bill = 1
  const user = 2

  export default {
    data() {
      return {
        index: 0
      }
    },
    computed: {
      priceCls() {
        return this.index === home ? 'icon-price_full' : 'icon-price'
      },
      orderCls() {
        return this.index === bill ? 'icon-order_fill' : 'icon-order'
      },
      peopleCls() {
        return this.index === user ? 'icon-people_fill' : 'icon-people'
      }
    },
    methods: {
      selectItem(index) {
        this.index = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .tab
    position: fixed
    bottom: 0
    width: 100%
    height: 48px
    font-size: 0
    .line
      display: inline-block
      flex: 0
      width: 100%
      border-1px($color-border-d)
    .content
      display: flex
      .tab-item
        flex: 1
        text-align: center
        font-size: 0
        color: $color-text-d
        &.router-link-active
          color: $color-text-o
        .icon
          margin: 5px 0 3px 0
          font-size: $font-size-large-x
        .text
          font-size: $font-size-small-s
</style>
