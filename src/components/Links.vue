<template>
  <ul class="links">
    <router-link
      class="links_item"
      v-for="(link, index) of links"
      :key="index" tag="li"
      :to="link.href"
    >
      <a class="link">{{link.text}}</a>
    </router-link>
  </ul>
</template>

<script>
import getLinks from '../data/links'

export default {
  name: 'Links',
  data: () => {
    return {
      links: getLinks()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .link
    color #fff
    text-decoration none
    &:hover
      text-decoration underline
  .links
    display inline
    &_item
      display inline-block
      margin 0 1rem 0 0
</style>
