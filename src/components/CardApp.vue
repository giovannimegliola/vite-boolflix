<template>
  <div class="card">
    <!-- <img :src="item.poster_path ? getImageUrl(item.poster_path) : 'placeholder.jpg'" alt="Movie Poster" /> -->
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.original_title }}</p>
    <p>{{ movie.original_language }}</p>
    <p>{{ movie.vote_average }}</p>
  </div>
</template>

<script>
  export default {
    name: "CardApp",
    props: {
      movie: Object
    },
    methods:{
    //   getImageUrl(posterPath) {
    //   return `https://image.tmdb.org/t/p/w500/${posterPath}`;
    // }
  },
}
</script>

<style lang="scss" scoped>

</style>