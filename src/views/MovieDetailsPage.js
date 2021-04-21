// import axios from 'axios';
import React, { Component, lazy, Suspense } from "react";
import api from "../ApiServise/Api";
import { Route, NavLink, withRouter, Switch } from "react-router-dom";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import Loader from "../data/Loader";
import routes from "../routes";
import s from "../Styles/styles.module.css";
// import Cast from '../Components/Cast/Cast';
// import Review from '../Components/Review/Review';

const Cast = lazy(() =>
  import("../Components/Cast/Cast" /* webpackChunkName: "Cast" */)
);
const Review = lazy(() =>
  import("../Components/Review/Review" /* webpackChunkName: "Review" */)
);


class MovieDetailsPage extends Component {
  state = {
    movieObj: {},
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const result = await api.getMovieDetails(movieId);
    // console.log(result);
    // console.log(result.genres);
    this.setState({ movieObj: result, genres: result.genres });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.homePage);
  };

  render() {
    const { match, location } = this.props;
    const { movieObj, genres } = this.state;
    const { id } = movieObj;

    return (
      <>
        <div>
          <button type="button" className={s.btn} onClick={this.handleGoBack}>
            Go Back
          </button>
          <div className={s.movieInfo}>
            <div>
              <MovieDetails movieObj={movieObj} genres={genres} key={id} />
            </div>

            <h3 className={s.info}>More information</h3>
            <ul className={s.box}>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: location.state.from },
                  }}
                  className={s.link}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: location.state.from },
                  }}
                  className={s.link}
                >
                  Review
                </NavLink>
              </li>
            </ul>
            <Suspense
              fallback={   <div className={s.loaderContainer}><Loader /></div> }
            >
              <Switch>
                <Route path={`${match.path}/cast`} component={Cast}></Route>
                <Route path={`${match.path}/reviews`} component={Review}></Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
