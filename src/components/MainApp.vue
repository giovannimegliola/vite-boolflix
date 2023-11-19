<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <h2>Film</h2>
      <div v-if="store.errorMessage" class="col-6 mt-5 mb-2 text-center error-text">
        <h2>{{ store.errorMessage }}</h2>
      </div>
      <div v-else v-for="(movie, index) in store.moviesList" :key="movie.id" class="col-6 col-md-4 mt-5 mb-2 text-center">
        <CardMoviesApp v-bind:myMovie="movie" @mouseover="rotate[index] = true" @mouseout="rotate[index] = false" :class="{ rotate: rotate[index] }"/>
      </div>
      <h2>Serie Tv</h2>
      <div v-for="(serie, index) in store.seriesList" :key="serie.id" class="col-6 col-md-4 mt-5 mb-2 text-center">
        <CardSeriesApp v-bind:mySerie="serie" @mouseover="rotate[index] = true" @mouseout="rotate[index] = false" :class="{ rotate: rotate[index] }"/>
      </div>
    </div>
  </div>
  </main> 
</template>

<script>
import { store } from "../data/store.js";
import CardMoviesApp from "./CardMoviesApp.vue";
import CardSeriesApp from "./CardSeriesApp.vue";

export default {
  components: {
    CardMoviesApp,
    CardSeriesApp,
  },
  data() {
    return {
      store,
      rotate: {},
    };
  },
};
</script>

<style lang="scss">
.error-text {
  color: #e50914;
}
</style>
