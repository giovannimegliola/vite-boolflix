<template>
  
 <HeaderApp />
 <MainApp/>

</template>

<script>

import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import CardMovieApp from './components/CardMovieApp.vue';
import CardTvApp from './components/CardTvApp.vue';
import { store } from './data/store';
import axios from 'axios';

  export default {
    name: "App",
    components: {
      HeaderApp,
      MainApp,
      CardMovieApp,
      CardTvApp
    },
    data (){
      return {
        store,
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
