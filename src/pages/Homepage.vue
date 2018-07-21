<template>
  <div class="homepage">
    <Slider :images=images type='homepage' />
    <div class="filler"></div>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue'
import getImages from '../data/images'

export default {
  name: 'Homepage',
  data: () => {
    return {
      images: getImages()
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="stylus" scoped>
  .filler
    width 100%
    height 160rem
    background #ccc
</style>
