import React from "react";
import PropTypes from "prop-types";
import s from "../MovieDetails/movieDetails.module.css";
// import { withRouter } from "react-router-dom";
{
  /* {movieObj.map(({poster_path, backdrop_path, title, vote_average, overview}) => ( */
}

const MovieDetails = ({ movieObj, genres }) => {
  const {
    id,
    poster_path,
    backdrop_path,
    title,
    name,
    vote_average,
    overview,
  } = movieObj;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  // console.log(movieObj);
  return (
    <div className={s.box}>
      <div>
        <img
          src={posterUrl || backdropUrl}
          alt={title || name}
          key={id}
          className={s.image}
          width="280"
        />
      </div>
      <div className={s.detailBox}>
        <h2>{title || movieObj.name}</h2>
        <ul className={s.detailList}>
          <li>
            <p className={s.title}>User score: </p>
            <span className={s.text}>{vote_average}</span>
          </li>
          <li>
            <p className={s.title}>Overview: </p>
            <p className={s.text}>{overview}</p>
          </li>
          <li>
            <p className={s.title}>Genres:</p>
            {genres &&
              genres.map((genre) => (
                <p className={s.text} key={genre.id}>
                  {" "}
                  {genre.name}
                </p>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  MovieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
  genres: PropTypes.array,
};

export default MovieDetails;
