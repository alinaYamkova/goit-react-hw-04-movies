import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import Navigation from "./Components/Navigation/Navigation";
import routes from "./routes";
import Loader from "react-loader-spinner";
// import NotFoundView from "./views/NotFoundView";
import "./App.css";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);
// const Review = lazy(() =>
//   import("./views/Review" /* webpackChunkName: "review" */)
// );
// const Cast = lazy(() => import("./views/Cast" /* webpackChunkName: "cast" */));

const App = () => (
  <>
    <AppBar>
      <Navigation />
    </AppBar>

    <Suspense
      fallback={
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={2500}
        />
      }
    >
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Route exact path={routes.moviesPage} component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
