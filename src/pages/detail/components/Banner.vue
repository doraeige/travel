<template>
  <div>
    <div class="banner" @click="handleOpenGallary">
      <img class="banner-img" :src="bannerImg" alt="故宫">
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <!-- 给 common-gallary 添加动画 展示和隐藏时，有渐隐渐现的效果-->
    <fade-animation>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleCloseGallary"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleOpenGallary () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      line-height: .6rem
      height: .6rem
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        background: rgba(0, 0, 0, 0.6)
        border-radius: .2rem
        font-size: .24rem
        .banner-icon
          font-size: .24rem
          margin-right: .05rem
</style>
