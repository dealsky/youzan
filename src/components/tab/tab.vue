<template>
  <div class="tab">
    <span class="line border-1px"></span>
    <div class="content">
      <router-link tag="div" class="tab-item" to="/home">
        <div class="icon">
          <i :class="priceCls"></i>
        </div>
        <span class="text">收银</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/bill">
        <div class="icon">
          <i :class="orderCls"></i>
        </div>
        <span class="text">流水</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/user">
        <div class="icon">
          <i :class="peopleCls"></i>
        </div>
        <span class="text">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {routePath} from 'common/js/util'
  import {baseRouterObj} from 'common/js/config'

  export default {
    data() {
      return {
        currentIndex: baseRouterObj.home
      }
    },
    created() {
      this.setIndex(this.$route)
    },
    computed: {
      priceCls() {
        const cls = 'icon-price'
        return this.currentIndex === baseRouterObj.home ? `${cls}_full` : cls
      },
      orderCls() {
        const cls = 'icon-order'
        return this.currentIndex === baseRouterObj.bill ? `${cls}_fill` : cls
      },
      peopleCls() {
        const cls = 'icon-people'
        return this.currentIndex === baseRouterObj.user ? `${cls}_fill` : cls
      }
    },
    methods: {
      setIndex(route) {
        if (routePath(route.path).length) {
          const firstPath = routePath(route.path)[0]
          for (let k in baseRouterObj) {
            if (firstPath === k) {
              this.currentIndex = baseRouterObj[k]
            }
          }
        }
      }
    },
    watch: {
      $route(newRoute) {
        this.setIndex(newRoute)
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
