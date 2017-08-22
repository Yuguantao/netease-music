<template>
  <div id="app">
    <header-app></header-app>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderApp from '@/components/Header'
export default {
  name: 'app',
  components: {
    HeaderApp
  }
}
</script>
<style>
  @import url(assets/css/reset.css);
</style>
