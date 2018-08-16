<template>
  <div class="header">
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <span class="iconfont header-back-icon">&#xe624;</span>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/" tag="div">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log(scroll)
      const top = document.documentElement.scrollTop
      if (top > 20) {
        let opacityStep = top / 140
        opacityStep = opacityStep > 1 ? 1 : opacityStep
        this.opacityStyle = {
          opacity: opacityStep
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .72rem
    height: .72rem
    line-height: .72rem
    text-align: center
    border-radius: .36rem
    background: rgba(0, 0, 0, .6)
    .header-back-icon
      font-size: .34rem
      color: #fff
      font-weight: bold
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    text-align: center
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .8rem
      text-align: center
      color: #fff
      font-size: .36rem
      font-weight: bold
</style>
