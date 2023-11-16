<template>
  <section id="movie" class="container">

    <h2>Film</h2>
    <div class="row">
      <CardApp v-for="(movie) in movies" :key="movie.id" />
    </div>

  </section>
  <section id="tv" class="container">

    <h2>Serie Tv</h2>
    <div class="row">
      <CardApp v-for="(serie) in series" :key="serie.id" />  
    </div>

</section>


</template>

<script>

import CardApp from './CardApp.vue';
export default {
    name: "MainApp",
    components: {
    CardApp,
    },
    props:{
    movies: Array,
    series: Array,
  }
}
</script>

<style lang="scss" scoped>

</style>