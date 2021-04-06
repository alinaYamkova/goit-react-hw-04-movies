import React, { Component, Suspense, lazy } from "react";
import api from "../ApiServise/Api";
import queryString from "query-string";
import Form from "../Components/Form/Form";
import MoviesList from "../Components/MoviesList/MoviesList";
import s from "../Styles/styles.module.css";

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: "",
    location: [],
    error: null,
  };

  // componentDidMount() {
  //   const { search, pathname } = this.props.location;
  //   const searchParams = queryString.parse(search);
  //   if (pathname && search) {
  //       this.setState({ searchQuery: searchParams.query });
  //   }
  // };

  async componentDidUpdate(prevState, prevProps) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      const responce = await api.getMovies(searchQuery);
      this.setState({ movies: responce.results });
    }
  }

  handleSubmit = (data) => {
    const { history, location } = this.props;
    this.setState({ searchQuery: data.name });
    history.push({ ...location, search: `query=${data.name}` });
  };

  // getName = (title, name) => {
  //   const {movies} = this.state;
  //   const getTitle = (movies.title) ? this.setState({name: title}) :
  //     (movies.name) ? this.setState({name}) :
  //     'NONAME';
  //   return getTitle;
  // };

  render() {
    const { searchQuery, movies } = this.state;
    return (
      <>
        <header className={s.Searchbar}>
          <h2 className={s.NavLink}>Movies Page</h2>
        </header>
        <Form onSubmit={this.handleSubmit} />
        {/* {movies && (
          <Suspense fallback={ <h2> Loading... </h2> }>
            <Route
              to={`movies/query=${query}`}
              render={props => <FoundFilms films={query} {...props} /> }
            />
          </Suspense>
        )}; */}
        {searchQuery && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default MoviesPage;
