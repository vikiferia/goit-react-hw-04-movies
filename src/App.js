import { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import HomePage from 'Page/HomePage/HomePage';
// import MoviesPage from 'Page/MoviesPage/MoviesPage';
// import MovieDetailsPage from 'Page/MovieDetailsPage/MovieDetailsPage';
// import routes from "./routes";
import Navigation from "./Component/Navigation/Navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* eslint react/prop-types: 1 */

const LazyHomePage = lazy(() =>
  import('./Page/HomePage/HomePage' /* webpackChunkName "home-page"*/),
);
const LazyMoviesPage = lazy(() =>
  import('./Page/MoviesPage/MoviesPage' /* webpackChunkName "movies-page"*/),
);
const LazyMovieDetailsPage = lazy(() =>
  import(
    './Page/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName "movie-details-page"*/
  ),
);

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path={`/`} component={LazyHomePage} />
            <Route exact path={`/movies`} component={LazyMoviesPage} />
            <Route
              path={'/movies/:movieId'}
              component={LazyMovieDetailsPage}
            />
            <Redirect to={`/`} />
          </Switch>
        </Suspense>
        <ToastContainer />
      </>
    );
  }
}

export default App;
