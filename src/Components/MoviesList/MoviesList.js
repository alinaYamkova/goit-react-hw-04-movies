import React from "react";
// import { Link, withRouter } from "react-router-dom";
// import routes from '../../routes';
import PropTypes from "prop-types";
import MoviePreview from "../MoviePreview/MoviePreview";
import s from "../MoviesList/moviesList.module.css";

const MoviesList = ({ movies }) => {
  // console.log(movies)
  return (
    <div className={s.listBox}>
      <ul className={s.movieList}>
        {movies.map((movie) => (
          <MoviePreview movies={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};


export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
