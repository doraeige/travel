<template>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    width: .4rem
    position: absolute
    top: 0
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    .item
      text-align: center
      line-height: .46rem
      color: $bgColor
</style>
