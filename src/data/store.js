import { reactive } from 'vue';

export const store = reactive({

  apiKey: '4795599c90ee2bae420bc1c37daf11be',
  moviesApiUrl: 'https://api.themoviedb.org/3/search/movie',
  seriesApiUrl: 'https://api.themoviedb.org/3/search/tv',
  imageUrl: 'https://image.tmdb.org/t/p/w342',
  moviesList: [],
  seriesList: [],
  genres: [],
  searchText: ''

});