import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';


const Navigation = () => {
  return (
    <ul className={style.Nav}>
      <li>
        <NavLink
          exact
          to={'/'}
          className={style.Header}
          activeClassName={style.Header__Active}
        >
          HomePage
        </NavLink>
      </li>
      <li className={style.Item}>
        <NavLink
          exact
          to={'/movies'}
          className={style.Header}
          activeClassName={style.Header__Active}
        >
          MoviesPage
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
