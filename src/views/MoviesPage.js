import React, { Component, Suspense } from "react";
// import { Route } from "react-router-dom";
import api from "../ApiServise/Api";
import Loader from "../data/Loader";
import Form from "../Components/Form/Form";
import MoviesList from "../Components/MoviesList/MoviesList";
import s from "../Styles/styles.module.css";

class MoviesPage extends Component {
  state = {
    searchQuery: null,
    someQuery: null,
    currentPage: 1,
    isLoading: false,
    msg: null,
  };

  componentDidMount() {
    const { pathname, search } = this.props.location;
    if (pathname && search) {
      this.setState({ searchQuery: search.slice(7) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery && searchQuery !== "") {
      this.searchMoves();
    }
  }

  searchMoves() {
    const { searchQuery } = this.state;
    this.setState({ isLoading: true });

    api.getMovies(searchQuery).then((result) => {
      if (result.length) {
        this.setState((prevState) => ({
          someQuery: [...result],
          resultLength: result.length,
          currentPage: prevState.currentPage + 1,
        }));
      } else {
        this.setState({ msg: "Please write a correct search" });
        alert(this.state.msg);
      }
    });
  }

  handleSubmit = (searchQuery) => {
    const { history, location } = this.props;
    this.setState({ searchQuery });
    history.push({ ...location, search: `query=${searchQuery.trim()}` });
  };

  render() {
    const { someQuery } = this.state;
    // const { match, location, history } = this.props;
    return (
      <>
        <header className={s.Searchbar}></header>
        <Form onSubmit={this.handleSubmit} />
        {someQuery && (
          <Suspense fallback={ <div className={s.loaderContainer}><Loader /></div> }>
            <MoviesList movies={someQuery} />
          </Suspense>
        )}
      </>
    );
  }
}

export default MoviesPage;
