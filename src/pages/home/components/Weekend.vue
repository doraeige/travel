<template>
  <div>
    <img src="">
  </div>
</template>

<template>
  <div>
    <div class="recommand-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of itemList" :key="item.id">
        <div class="img-wrapper">
          <img class="item-img" :src='item.imgUrl' alt="picture">
        </div>
        <div class="img-info">
          <p class="img-title">{{item.title}}</p>
          <p class="img-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      itemList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg',
        title: '长沙必游TOP10',
        desc: '到了长沙，一定要到这些地方走走'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg',
        title: '长沙必游TOP10',
        desc: '到了长沙，一定要到这些地方走走'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg',
        title: '长沙必游TOP10',
        desc: '到了长沙，一定要到这些地方走走'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommand-title
    line-height: .8rem
    background: #eeeeee96
    text-indent: .2rem
    margin-top: .2rem
  .img-wrapper
    height: 0
    padding-bottom: 33.5%
    .item-img
      width: 100%
  .img-info
    padding: .3rem
    padding-left: .2rem
    .img-title
      margin-top: .2rem
      font-size: .3rem
      line-height: .44rem
      ellipsis()
    .img-desc
      margin-top: .1rem
      line-height: .4rem
      color: #7b7a7abf
      font-size: .28rem
      ellipsis()
</style>
