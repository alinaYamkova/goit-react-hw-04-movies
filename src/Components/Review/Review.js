import { Component } from "react";
import PropTypes from "prop-types";
import api from "../../ApiServise/Api";
import s from "./reviews.module.css";

class Review extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await api.getReview(movieId);
    // console.log('reviews: ', response.data.results)
    this.setState({ reviews: response.data.results });
    this.scrollWindow();
  }

  scrollWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { reviews } = this.state;
    return (
      <div className={s.reviewBox}>
        <h1 className={s.title}>Reviews</h1>
        <ul>
          {reviews ? (
            reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3 className={s.author}>{author}</h3>
                <p className={s.content}>{content}</p>
              </li>
            ))
          ) : (
            <p> no reviews </p>
          )}
        </ul>
      </div>
    );
  }
}

export default Review;

Review.propTypes = {
  movieId: PropTypes.string,
};
