// import { check } from 'prettier'
import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../ApiServise/Api";
import s from './cast.module.css';
import { v4 as uuidv4 } from 'uuid';


class Cast extends Component {
  state = {
    casts: [],
  };

  async componentDidMount() {
    console.log(this.props);
    const { movieId } = this.props.mach.params;
    const response = await api.getMovies(movieId);
    // console.log(response.data.results);
    this.setState({ casts: response });
  }

  render() {
    const { casts } = this.state;
    return (
      <div>
        <ul className={s.castList}>
          {casts.map(({ profile_path, name, character }) => (
            <li key={uuidv4()} className={s.castItem}>
              <img
                src={ `https://image.tmdb.org/t/p/w500/${profile_path}` }
                alt="actor" className={s.castImage} />
              <p className={s.name}>{name}</p>
              <p className={s.character}>{character || 'unknown'}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
