import React from "react";
import s from "../Styles/styles.module.css";

// https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to='/'

const NotFoundView = () => {
  return <h1 className={s.NavLink}>404 - Page not found</h1>;
};

export default NotFoundView;
