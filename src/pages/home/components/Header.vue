<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      font-weight: bold
      .back-icon
        text-align: center
        font-size: .36rem
        line-height: $headerHeight
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .15rem
      background: #fff
      border-radius: .07rem
      color: #e4e7ea
      padding-left: .2rem
    .header-right
      min-width: 1.04rem
      padding-left: .15rem
      float: right
      text-align: center
      line-height: $headerHeight
      height: $headerHeight
      color: #fff
      .arrow-icon
        margin-left: -.04rem
</style>
