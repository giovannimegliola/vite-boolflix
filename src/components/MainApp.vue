<template>
  <div class="container">
    Main Content
    <CardMovieApp />
    <CardTvApp />

  </div>
</template>

<script>

import CardMovieApp from './CardMovieApp.vue';
import CardTvApp from './CardTvApp.vue';
import axios from 'axios';
import { store } from '../data/store';

  export default {
    name: "MainApp",
    components: {
      CardMovieApp,
      CardTvApp
    },
    data () {
      return {
        store,
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>