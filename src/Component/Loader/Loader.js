import React from 'react';
import Loader from 'react-loader-spinner';
import style from './Loader.module.css';

const MyLoader = () => {
  return (
    <Loader
      className={style.center}
      type="Circles"
      color="#3f5"
      height={55}
      width={55}
     
    />
  );
};

export default MyLoader;
