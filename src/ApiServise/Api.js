// import PropTypes from "prop-types";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
let key = "9599265593b07045c4126c91624e271e";

function getPopulars() {
  return axios
    .get(`trending/all/day?api_key=${key}`)
    .then((response) => response.data.results)
    .catch((error) => {
      console.error(error);
    });
}

function getMovies(query) {
  return axios
    .get(
      `search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then((response) => response.data.results)
    .catch((error) => {
      console.error(error);
    });
}

function getMovieDetails(movieId) {
  return axios
    .get(`movie/${movieId}?api_key=${key}&language=en-US`)
    .then((response) => {
       return response.data
    })
    .catch((error) => {
      console.error(error);
    });
}


function getCast(movieId) {
  return axios
    .get(`movie/${movieId}/credits?api_key=${key}&language=en-US`)
    .then((response) => {
      return response.data.cast
   })
   .catch((error) => {
     console.error(error);
   });
}

function getReview(movieId) {
  return axios
    .get(`movie/${movieId}/reviews?api_key=${key}&language=en-US`)
    .then((response) => {
      return response
   })
   .catch((error) => {
     console.error(error);
   });
}

const api = { getPopulars, getMovies, getMovieDetails, getCast, getReview };

export default api;
