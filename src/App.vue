<template>

 <HeaderApp />

 <main>
  <section id="movie" class="container">
    <h2>Film</h2>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="(movie) in store.movieList" :key="movie.id">
        {{ movie.title }} <br>
        {{ movie.original_title }} <br>
        {{ movie.original_language }} <br>
        {{ movie.vote_average }}
      </div>
    </div>
  </section>
  <section id="movie" class="container">
    <h2>Serie Tv</h2>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="(serie) in store.seriesList" :key="serie.id">
        {{ serie.name }}
      </div>
    </div>
  </section>
 </main>
 

</template>

<script>

import HeaderApp from './components/HeaderApp.vue';
import { store } from './data/store';
import axios from 'axios';

  export default {
    name: "App",
    components: {
      HeaderApp,
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
