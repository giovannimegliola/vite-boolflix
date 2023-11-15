<template>
  <section id="movie" class="container">

    <h2>Film</h2>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="(movie) in store.movieList" :key="movie.id">
        {{ movie.title }} <br>
        {{ movie.original_title }} <br>
        {{ movie.original_language }} <br>
        {{ movie.vote_count }}
      </div>
    </div>

  </section>
  <section id="tv" class="container">

    <h2>Serie Tv</h2>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="(serie) in store.seriesList" :key="serie.id">
    {{ serie.name }}
  </div>
</div>

</section>


</template>

<script>

import CardApp from './CardApp.vue';
import axios from 'axios';
import { store } from '../data/store';

  export default {
    name: "MainApp",
    components: {
      CardApp,
      
    data () {
      return {
        store,
      }
    }
    
  }
}
</script>

<style lang="scss" scoped>

</style>