<template>
  <div class="header sticky">
    <Links />
  </div>
</template>

<script>
import Links from './Links.vue'

export default {
  name: 'Header',
  components: {
    Links
  }
}
</script>

<style lang="stylus" scoped>
  .header
    background #42b983
    padding 1.5rem
    color #fff
    position absolute
    left 0
    right 0
    top: 0
    &.sticky
      position fixed
      z-index 2
</style>
