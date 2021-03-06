import Button from "../../Component/Button/Button";
import Cast from "../../Component/Cast/Cast";
import Reviews from "../../Component/Reviews/Reviews";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';

import { fetchMovieId } from "../../Services/API";
import style from './MovieDetailsPage.module.css';


class MovieDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
  };
  state = {
    movieId: '',
  };
  async componentDidMount() {
    const propMovieId = this.props.match.params.movieId;
    const response = await fetchMovieId(propMovieId);
    this.setState({ movieId: response.data });
  }

  onBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || '/');
    history.push({ search: location.search });
  };

  render() {
    const { movieId } = this.state;
    const { url, path } = this.props.match;
    return (
      <>
        {movieId !== '' && (
          <>
            <div className={style.row}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieId.poster_path}`}
                alt={movieId.title}
              />
              <div className={style.list}>
                <Button onClick={this.onBack} aria-label="Go back">
                  &#8592; Go back
                </Button>
                <h2>{`${movieId.title} (${movieId.release_date.slice(
                  0,
                  4,
                )})`}</h2>
                <p>{'rating - ' + movieId.vote_average}</p>
                <h3>Overview:</h3>
                <p>{movieId.overview}</p>
                {movieId.genres.length > 0 && (
                  <>
                    <h3>Genres:</h3>
                    <ul className={style.list}>
                      {movieId.genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
            <ul className={style.list}>
              <NavLink to={`${url}${'/cast'}`}>Cast</NavLink>
              <NavLink to={`${url}${'/reviews'}`}>Reviews</NavLink>
            </ul>
            <Route path={`${path}${'/cast'}`} component={Cast} />
            <Route path={`${path}${'/reviews'}`} component={Reviews} />
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
