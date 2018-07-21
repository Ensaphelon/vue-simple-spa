<template>
  <div :class="classObject">
    <Links />
  </div>
</template>

<script>
import Links from './Links.vue'

export default {
  name: 'Header',
  components: {
    Links
  },
  data: function () {
    return {
      classObject: {
        header: true,
        sticky: false
      }
    }
  },
  mounted: function () {
    this.bindScrollEvent()
  },
  methods: {
    bindScrollEvent: function () {
      const self = this
      window.onscroll = function () {
        self.classObject.sticky = window.pageYOffset > self.$el.offsetHeight
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    background #42b983
    padding 1.5rem
    color #fff
    &.sticky
      position fixed
      left 0
      right 0
      top: 0
      z-index 2
</style>
