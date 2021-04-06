import React, {Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import Cast from './views/Cast';
// import Review from './views/Review';
import AppBar from './Components/AppBar/AppBar';
import Navigation from './Components/Navigation/Navigation';
import routes from './routes';

import NotFoundView from './views/NotFoundView';
import './App.css';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */));
const Cast = lazy(() => import('./views/Cast' /* webpackChunkName: "cast" */));
const Review = lazy(() => import('./views/Review' /* webpackChunkName: "review" */));

const App = () => (
  <>   
    <AppBar>
      <Navigation />
    </AppBar>
    
    <Suspense>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route path={routes.movieDetailsPage}  component={MovieDetailsPage} />
        <Route exact path={routes.moviesPage} component={MoviesPage} />
        <Route path={routes.cast}  component={Cast} />
        <Route path={routes.review}  component={Review} />

        <Route component={NotFoundView} /> 
        {/* <Redirect to={routes.homePage} />    */}
      </Switch>
    </Suspense>
  </>
);

export default App;
