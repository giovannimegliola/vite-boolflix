<template>

 <HeaderApp @performSearch="getMoviesAndSeries"/>

 <main>
  <section id="movie" class="container">
    <h2>Film</h2>
    <div class="row gy-4">
      <div class="col-12 col-md-4 col-lg-3" v-for="(movie) in store.movieList" :key="movie.id">
        <CardCApp  :title="movie.title" :vote="movie.vote_average" :language="movie.original_language" :image="movie.poster_path" :overview="movie.overview"/>
      </div>
    </div>
  </section>
  <section id="tv" class="container">
    <h2>Serie Tv</h2>
    <div class="row gy-4">
      <div class="col-12 col-md-4 col-lg-3" v-for="(tv) in store.seriesList" :key="tv.id">
        <CardCApp  :title="tv.name" :vote="tv.vote_average" :language="tv.original_language" :image="tv.poster_path" :overview="tv.overview"/>
      </div>
    </div>
  </section>
 </main>
 

</template>

<script>

import HeaderApp from './components/HeaderApp.vue';
import CardApp from './components/CardApp.vue'
import { store } from './data/store';
import axios from 'axios';


  export default {
    name: "App",
    components: {
      HeaderApp,
      CardApp
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
    },
    
  };
</script>

<style lang="scss" scoped>

</style>
