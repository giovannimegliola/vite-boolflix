<template>
  <HeaderApp @search="searchContent" />
  <MainApp />  
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue"
import MainApp from "./components/MainApp.vue";
import CardMoviesApp from "./components/CardMoviesApp.vue";
import CardSeriesApp from "./components/CardSeriesApp.vue";
import { store } from "./data/store.js";
import axios from "axios";

export default {
  components: {
    HeaderApp,
    MainApp,
    CardMoviesApp,
    CardSeriesApp
  },
  data() {
    return {
      store,
    };
  },
  methods: {
  async searchContent() {
    store.moviesList = [];
    store.seriesList = [];

    const searchUrlMovies = `${store.moviesApiUrl}?api_key=${store.apiKey}&query=${store.searchText}`;
    const searchUrlSeries = `${store.seriesApiUrl}?api_key=${store.apiKey}&query=${store.searchText}`;

    try {
      const [moviesResponse, seriesResponse] = await Promise.all([
        axios.get(searchUrlMovies),
        axios.get(searchUrlSeries)
      ]);

      if (moviesResponse.data.results.length === 0 || seriesResponse.data.results.length === 0) {
        store.errorMessage = "Nessun risultato trovato";
      } else {
        store.moviesList = moviesResponse.data.results;
        store.seriesList = seriesResponse.data.results;
        store.errorMessage = "";
      }
    } catch (error) {
      console.error("Errore durante la ricerca:", error);
    }
  },
  // async loadPopularMovies() {
  //     const popularMoviesUrl = `${store.moviesApiUrl}/popular?api_key=${store.apiKey}`;
      
  //     try {
  //       const response = await axios.get(popularMoviesUrl);
        
  //       if (response.data.results.length === 0) {
  //         store.errorMessage = "Nessun risultato trovato";
  //       } else {
  //         store.moviesList = response.data.results;
  //         store.seriesList = []; 
  //         store.errorMessage = "";
  //       }
  //     } catch (error) {
  //       console.error("Errore durante il caricamento dei film più popolari:", error);
  //     }
  //   },
  },
  // created() {
  //   this.loadPopularMovies(); 
  // },
};
</script>

<style lang="scss">
</style>
