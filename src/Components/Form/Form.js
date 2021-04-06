import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './form.module.css';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  
  state = {
    searchQuery: '',
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit( this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
       <header className={s.Searchbar}>
        <form  onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="searchQuery"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  };
}
export default Form
          