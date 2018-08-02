<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">
          <h2>当前城市</h2>
        </div>
        <div class="botton-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          <h2>热门城市</h2>
        </div>
        <div class="botton-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          <h2>A</h2>
        </div>
        <ul class="item-list">
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
        </ul>
        <div class="title border-topbottom">
          <h2>A</h2>
        </div>
        <ul class="item-list">
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
          <li class="item border-bottom">阿拉尔</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      height: .60rem
      line-height: .60rem
      background: #eee
      color: #666
      padding-left: .2rem
      font-size: .26rem
    .botton-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          border: .02rem solid #ccc
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
