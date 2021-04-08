import { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../ApiServise/Api';
import s from './reviews.module.css';

class Review extends Component {
  state = {
    reviews: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await api.getReview(movieId);
    this.setState({ reviews: response });
  }

  render() {
    const { reviews} = this.state;
    return (
      <div className={s.reviews}>
        <ul>
          {reviews.map(({ author, content, created_at, id }) => {
              return (
                <li key={id}>
                  <h4>{author}</h4>
                  <p>{created_at}</p>
                  <p>{content}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Review;

Review.propTypes = {
  moviesId: PropTypes.string,
};