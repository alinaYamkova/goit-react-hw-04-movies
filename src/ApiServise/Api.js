import PropTypes from "prop-types";
// const fetchIMovies = () => {
//   const url = `?api_key=${key}&language=en-US&page=1`;
//   return axios.get(url).then(({ data }) => {
//     console.log(data)
//     return data.results;
//   });
// };

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
let key = "9599265593b07045c4126c91624e271e";

function getPopulars() {
  return axios
    .get(`/trending/all/day?api_key=${key}`)
    .then((response) => response.data.results);
}

function getMovies(query) {
  return axios
    .get(
      `/search/multi?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then((response) => response.data);
}

function getCast(moviesId) {
  return axios
    .get(`/movie/${moviesId}/credits?api_key=${key}&language=en-US`)
    .then((response) => response.data.cast);
}

function getReview(type, movieId) {
  return axios
    .get(`/${type}/${movieId}/reviews?api_key=${key}&language=en-US&page=1`)
    .then((response) => response.data.results);
}

export default { getPopulars, getMovies, getCast, getReview };

// getFetch.propTypes = {
//   page: PropTypes.number.isRequired,
// };
