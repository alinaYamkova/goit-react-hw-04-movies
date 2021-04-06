import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
// import routes from '../../routes';
import MoviePreview from "./MoviePreview";
import s from "./moviesList.module.css";

const MoviesList = ({ movies, match, location }) => {
  return (
    <ul className={s.MovieList}>
      {movies.map(
        ({ id, title, name, poster_path, overview, vote_average }) => {
          // const img = `https://image.tmdb.org/t/p/w500${poster_path}`;
          return (
            <MoviePreview
              key={id}
              title={title ? title : name}
              posterPath={poster_path}
              match={match.url}
              location={location}
              overview={overview}
              voteAverage={vote_average}
            />
          );
        }
      )}
      ;
    </ul>
  );
};

export default withRouter(MoviesList);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
