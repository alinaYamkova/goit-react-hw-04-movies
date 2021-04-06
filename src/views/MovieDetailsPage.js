// import axios from 'axios';
import React, {Component, Suspense, lazy } from 'react';
import api from '../ApiServise/Api';
import { Route, Switch } from 'react-router-dom';
import MoviesList from '../Components/MoviesList/MoviesList';
import Cast from './Cast';
import Review from './Review';
import routes from '../routes';
import s from '../Styles/styles.module.css';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
    title: '',
    name: '',
    overview: '',
    vote_average: null,
    release_date: null,
    poster_path: null,
    genres: [],
  };

  async componentDidMount() {
    const {movieId} = this.state.movies;
    const response = await api.getCast(movieId) ;
    this.setState({ movies: response});
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.moviesPage);
  };

  render () {
    const { movies } = this.state;
    const { match, location, history } = this.props;
    console.log('location', location.state)
    return (
      <>
        <button type='button' className={s.btn} onClick={this.handleGoBack}>
          Go Back
        </button>

        <div>
          <h1 className={s.NavLink}>Movie Details {this.props.match.params.movieId}</h1>
          <MoviesList movies={movies} match={match} location={location} />        
          {/* <Route path={`${match.path}/:movieId`} component={MovieDetails} /> */}
        </div>

        <div>
          <Suspense
            fallback={ <p>Load...</p> }>
            <Switch>
              <Route path={`${match.path}/cast`} componen={Cast} />
              <Route path={`${match.path}/review`} componen={Review} />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  };
};


export default MovieDetailsPage;

