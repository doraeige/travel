<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    background: $bgColor
    color: #ffffffe6
    line-height: $headerHeight
    height: $headerHeight
    text-align: center
    font-size: .32rem
    overflow: hidden
    .header-back-icon
      position: absolute
      top: 0
      left: 0
      color: #ffffffd9
      width: .64rem
      text-align: center
      font-size: .36rem
      font-weight: bold
</style>
