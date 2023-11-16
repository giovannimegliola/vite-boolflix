import {reactive} from "vue";

export const store = reactive ({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: {
    movies: "search/movie",
    series: "search/tv"
  },

  params: {
    api_key: "4795599c90ee2bae420bc1c37daf11be",
    query: "star"
  },

  error:"",
  loading: true,
  searchText: '',
  movieList: [],
  seriesList: []

});