<template>
  <div>
    <div class="title">热情推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of itemList" :key="item.id">
        <img class="item-img" :src='item.imgUrl' alt="picture">
        <div class="img-info">
          <p class="img-title">{{item.title}}</p>
          <p class="img-desc">{{item.desc}}</p>
          <button class="img-btn">查看详情</button>
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
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201403/10/b7aa220089fa8054e6e012bafff63042.jpg_200x200_650160bf.jpg',
        title: '长沙生态动物园',
        desc: '长沙生态动物园'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201403/10/b7aa220089fa8054e6e012bafff63042.jpg_200x200_650160bf.jpg',
        title: '长沙生态动物园',
        desc: '长沙生态动物园'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201403/10/b7aa220089fa8054e6e012bafff63042.jpg_200x200_650160bf.jpg',
        title: '长沙生态动物园',
        desc: '长沙生态动物园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eeeeee96
    text-indent: .2rem
    margin-top: .2rem
  .item
    display: flex
    overflow: hidden
    height: 2.4rem
    .item-img
      width: 2rem
      height: 2rem
      padding: .2rem
    .img-info
      flex: 1
      margin-top: .13rem
      padding-left: .04rem
      min-width: 0
      .img-title
        margin-top: .26rem
        font-size: .32rem
        line-height: .44rem
        ellipsis()
      .img-desc
        margin-top: .1rem
        line-height: .4rem
        color: #7b7a7abf
        ellipsis()
      .img-btn
        font-size: .3rem
        line-height: .44rem
        margin-top: .22rem
        background: #ff9300
        color: #fff
        padding: 0 .2rem
        border-radius: .06rem
</style>
