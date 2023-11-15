<template>
  <header class="container">
    Header
  </header>
</template>

<script>
import { store } from '../data/store';
  export default {
    name: "HeaderApp",
    data () {
      return {
        store,
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>