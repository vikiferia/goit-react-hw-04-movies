import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ListMovies.module.css';


const ListMovie = ({ list, location }) => {
  return (
    <ol>
      {list.map(movie => (
        <li className={style.list} key={movie.id}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: { from: location.pathname },
              search: location.search,
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ol>
  );
};

ListMovie.propTypes = {
  list: PropTypes.array,
  location: PropTypes.object,
};

export default withRouter(ListMovie);
