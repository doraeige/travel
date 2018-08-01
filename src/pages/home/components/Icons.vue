<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="icon">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: false,
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons >>> .swiper-pagination-bullets
    bottom: 0
  .icons >>> .my-bullet
      border-radius .06rem
      width .12rem
      height .12rem
      margin 0 .08rem
      display: inline-block
      background: rgba(0,0,0,0.20)
  .icons >>> .my-bullet-active
      background: rgba(0,175,190,.8)
  .icons
    margin-top: .1rem
    .icon
      overflow: hidden
      width: 25%
      height: 0
      padding-bottom: 20%
      float: left
      position: relative
      margin-top: .2rem
      .icon-img
        position: absolute
        top: 0
        right: 0
        left: 0
        bottom: .44rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        bottom: 0
        right: 0
        left: 0
        line-height: .44rem
        height: .44rem
        text-align: center
        ellipsis()
</style>
