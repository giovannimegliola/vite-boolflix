<template>

 <HeaderApp />
 <MainApp />
 <CardApp />

</template>

<script>

import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import CardApp from './components/CardApp.vue';
import { store } from './data/store';
import axios from 'axios';

  export default {
    name: "App",
    components: {
      HeaderApp,
      MainApp,
      CardApp,
    },
    data (){
      return {
        store,
      }
    },
    methods: {
      getMoviesAndSeries() {
        const movieurl = this.store.apiUrl + this.store.endPoint.movies;
        axios.get(movieurl, {params: this.store.params}).then((res) => {
          console.log(res.data.results);
          this.store.movieList = res.data.results;
        });
        const tvurl = this.store.apiUrl + this.store.endPoint.series;
        axios.get(tvurl, {params: this.store.params}).then((res) => {
          console.log(res.data.results);
          this.store.seriesList = res.data.results;
        });
      }
    },
    created(){
      this.getMoviesAndSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>
