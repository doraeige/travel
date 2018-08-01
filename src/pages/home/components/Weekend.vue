<template>
  <div>
    <img src="">
  </div>
</template>

<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
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
  name: 'Homeweekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .weekend-title
    line-height: .8rem
    background: #eeeeee96
    text-indent: .2rem
    font-size: 0.3rem
  .img-wrapper
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .img-info
    padding: .2rem
    .img-title
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
