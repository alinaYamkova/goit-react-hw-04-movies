import React, { Component } from "react";
import api from "../ApiServise/Api";
import MoviesList from "../Components/MoviesList/MoviesList";
import s from '../Styles/styles.module.css'

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await api.getPopulars()
    this.setState({ movies: response });
    console.log(response)
  }

  render() {
    const { movies } = this.state;
    // const {location} = this.props
    // const {url} = this.props.much.url;
    return (
      <>
        <h2 className={s.homePageTitle}>Popular movies today</h2>
        <MoviesList movies={movies} {...this.props} />
      </>
    );
  }
}
export default HomePage;
