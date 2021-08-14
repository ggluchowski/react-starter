import React from 'react';
import styles from './Hero.scss';
import space from '../../images/space.png';

const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>Things to do</h2>
    <img src={space} alt="logo" className={styles.image} />
  </header>
);

export default Hero;