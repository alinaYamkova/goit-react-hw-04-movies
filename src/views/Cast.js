import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";
import s from "../Styles/styles.module.css";

class Cast extends Component {
  state = {
    cast: [],
    movieId: [],
  };

  async componentDidMount() {
    // console.log(this.props);
    const { moviesId } = this.props.mach.papams;
    const key = "9599265593b07045c4126c91624e271e";
    const url = `https://api.themoviedb.org/3/movie/${moviesId}/credits`;
    const response = await axios.get(`${url}?api_key=${key}&language=en-US`);
    console.log(response.data.results);

    this.setState({ casts: response.data.results });
  }

  render() {
    const { cast } = this.state;
    // console.log(cast);
    return (
      <>
        <h3>Cast</h3>
        <ul className={s.castList}>
          {cast &&
            cast.map(({ id, name, profile_path, character }) => {
              const castImg = `https://image.tmdb.org/t/p/w500${profile_path}`;
              return (
                <li key={id} className={s.castItem}>
                  {/* <Link to={{pathname: `${routes.castPage}/${name}`,
                          state: {from: this.props.location}}}>
                    </Link> */}
                  {profile_path && (
                    <img
                      src={castImg}
                      src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                      alt={name}
                      className={s.castImage}
                    />
                  )}
                  <div className="cast_descript">
                    <h3>{name}</h3>
                    <p>Character: {character}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
  // {this.state.movies.map(movie => (
  //   <li key={movie.id}>
  //     <span className={s.Title}>{movie.title} </span>
  //     <span className={s.titleRating}>  {movie.vote_average}</span>
  //     <p className={s.titleRelise}>Release date: {movie.release_date}</p>
  //     <p className={s.titleOverview}>Overview: {movie.overview}</p>
  //     <p className={s.title}></p>
  //   </li>
  // ))}
}

export default withRouter(Cast);
