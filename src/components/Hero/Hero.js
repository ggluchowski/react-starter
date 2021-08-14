import React from 'react';
import styles from './Hero.scss';
import img from '../../images/space.png';

const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>Things to do</h2>
    <img className={styles.image} src={img} />
  </header>
);

export default Hero;