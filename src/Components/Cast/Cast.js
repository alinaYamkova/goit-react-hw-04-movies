// import { check } from 'prettier'
import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../ApiServise/Api";
import { v4 as uuidv4 } from "uuidv4";

class Cast extends Component {
  state = {
    casts: [],
  };

  async componentDidMount() {
    console.log(this.props);
    const { moviesId } = this.props.mach.papams;
    const response = await api.getMovies(moviesId);
    // console.log(response.data.results);
    this.setState({ casts: response });
  }

  render() {
    const { casts } = this.state;
    return (
      <div>
        <ul>
          {casts.map(({ name, character, profile_path }) => {
            return (
              <li key={uuidv4()}>
                <img src={profile_path} alt={name} character={character} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Cast.propTypes = {
  moviesId: PropTypes.string,
};

export default Cast;
