import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
// import routes from "../../routes";
import s from "../MoviePreview/moviePreview.module.css";

const MoviePreview = ({ movies, location }) => {
  // console.log(movies.genre_ids)
  // console.log(location)
  const { id, poster_path, title, name } = movies;
  return (
    <li className={s.preview}>
      <Link
        className={s.link}
        to={{
          // pathname: `${routes.moviesPage}/${id}`,
          pathname: `/movies/${id}`,
          state: { from: location },
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title || name}
          data={id}
          className={s.image}
        />
        <h2 className={s.Title}>{title ? title : name}</h2>
      </Link>
    </li>
  );
};

MoviePreview.propTypes = {
  movies: PropTypes.object,
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviePreview);
