// import axios from 'axios';
import React, { Component, Suspense } from "react";
import api from "../ApiServise/Api";
import { Route, Switch, NavLink } from "react-router-dom";
import Loader from "../data/Loader";
import Cast from "../Components/Cast/Cast";
import Review from "../Components/Review/Review";
import routes from "../routes";
import s from "../Styles/styles.module.css";

class MovieDetailsPage extends Component {
  state = {
    query: "",
    title: null,
    name: null,
    overview: null,
    genres: null,
    poster_path: null,
    release_date: null,
    vote_average: null,
    isLoading: false,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = api.getMovies(movieId);
    this.setState({ ...response, isLoading: true });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.moviesPage);
  };

  render() {
    const { match, location } = this.props;
    const {
      title,
      name,
      overview,
      genres,
      poster_path,
      release_date,
      vote_average,
    } = this.state;
    const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
      <>
        <button type="button" className={s.btn} onClick={this.handleGoBack}>
          Go Back
        </button>

        <section>
          <div>{poster_path && <img src={imgUrl} alt={title || name} />}</div>
          <div className={s.description}>
            <h1>{title || name}</h1>
            <p>User Score: {vote_average}</p>
            {/* ({release_date && release_date.slice(0, 4)}) */}
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres && <p>{genres.map((genre) => ` ${genre.name}, `)}</p>}
          </div>
        </section>

        <section>
          <div className={s.moreInfo}>
            <h3 className={s.info}>More information</h3>
            <ul className={s.link}>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { ...location.state },
                  }}
                  className={s.link}
                >
                  Casts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { ...location.state },
                  }}
                  className={s.link}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense
            fallback={
              <div className={s.loaderContainer}>
                <Loader />
              </div>
            }
          >
            <Switch>
              <Route path={`${match.path}/cast`} componen={Cast} />
              <Route path={`${match.path}/review`} componen={Review} />
            </Switch>
          </Suspense>
        </section>
      </>
    );
  }
}

export default MovieDetailsPage;
