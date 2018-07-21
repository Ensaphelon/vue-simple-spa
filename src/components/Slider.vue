<template>
  <div class="slider">
    <Slick :options="slickOptions">
      <li v-for="(image, index) in images" :key="index">
        <div class="slide">
          <a target="blank" :href="image.href">
            <img class="slide_image" :src="image.src" :alt="image.text" :title="image.text">
          </a>
        </div>
      </li>
    </Slick>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import getSliderSettings from '../settings/slider'

import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

export default {
  name: 'Slider',
  props: [
    'images',
    'type'
  ],
  data: function () {
    return {
      slickOptions: getSliderSettings(this.type)
    }
  },
  components: {
    Slick
  }
}
</script>

<style lang="stylus" scoped>
  .slider
    margin-bottom -.3rem
  .slide
    width 100%
    &_image
      width 100%
</style>
