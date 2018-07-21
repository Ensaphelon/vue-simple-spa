<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
html {
  font-size: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
}
.content {
  margin-top: 4.4rem;
}
.p-15 {
  padding: 1.5rem;
}
</style>
