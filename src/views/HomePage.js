import React, { Component } from "react";
// import MoviesList from '../Components/MoviesList/MoviesList';
// import s from '../Components/Navigation/Navigation.module.css';
import api from "../ApiServise/Api";
import { Link, withRouter } from "react-router-dom";
import MoviesList from "../Components/MoviesList/MoviesList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await api.getPopulars();
    this.setState({ movies: response });
  }

  render() {
    const { movies } = this.state;
    const { match, location } = this.props;
    return (
      <>
        <h1>Popular movies</h1>
        <ol>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <MoviesList movies={movies} match={match} location={location} />
                {/* <MoviePreview 
                    poster_path={movie.poster_path} 
                    vote_average={movie.vote_average} 
                    title={movie.title}
                    name={movie.name}
                    release_date={movie.release_date}
                  /> */}
              </Link>
            </li>
          ))}
        </ol>
      </>
    );
  }
}
export default withRouter(HomePage);
