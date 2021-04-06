import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import s from "./moviesList.module.css";

const MoviePreview = ({
  poster_path,
  match,
  id,
  location,
  title,
  name,
  vote_average,
  release_date,
}) => {
  const img = `https://image.tmdb.org/t/p/w300${poster_path}`;
  return (
    <div className={s.List}>
      <Link
        to={{
          pathname: `${match.url}/${id}`,
          state: { from: `${location}` },
        }}
      >
        <img scr={img} alt={title || name} />
        <div className={s.ListBody}>
          <h2 className={s.Title}>
            {title ? title : name}
            <span className={s.titleRating}>{vote_average}</span>
          </h2>
          <p>Release: {release_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(MoviePreview);
