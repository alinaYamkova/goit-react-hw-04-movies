import React from "react";
// import { Link, withRouter } from "react-router-dom";
// import routes from '../../routes';
import PropTypes from "prop-types";
import MoviePreview from '../MoviePreview/MoviePreview';
import s from '../MoviesList/moviesList.module.css';

const MoviesList = ({ movies }) => {
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
  // return (
  //   <ul>
  //     {movies.map( movie => {
  //       const { backdrop_path, id, title, poster_path, media_type } = movie;
  //       // const imgUrl = `https://image.tmdb.org/t/p/w500${currentImg}`;
  //       return <li key={id} >
  //         <Link to={{
  //           pathname: `${routes.moviesPage}/${id}`,
  //            hash: `${media_type}`,
  //           state: { from: location },
  //         }}>
  //           <img src={`https://image.tmdb.org/t/p/w500${poster_path}` || backdrop_path}
  //             alt={title || movie.name}/>
  //           {title || movie.name}
  //         </Link>
  //       </li>
  //     })}                  
  //   </ul>
  // );
// };

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
