import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";
import routes from "../../routes";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        exact
        to={routes.homePage}
        className="navLink"
        activeClassName="navLinkActive"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to={routes.moviesPage}
        className="navLink"
        activeClassName="navLinkActive"
      >
        Movies
      </NavLink>

      {/* <NavLink
        // exact
        to={routes.movieDetailsPage}
        className="navLink"
        activeClassName="navLinkActive"
      >
        Movie Id
      </NavLink>
      <NavLink
        // exact
        to={routes.cast}
        className="navLink"
        activeClassName="navLinkActive"
      >
        Cast
      </NavLink>
      <NavLink
        // exact
        to={routes.review}
        className="navLink"
        activeClassName="navLinkActive"
      >
        Review
      </NavLink> */}
    </nav>
  );
};

export default Navigation;
