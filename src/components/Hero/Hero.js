import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img src={props.imageAddressText} alt="logo" className={styles.image} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageAddressText: PropTypes.string,
}

export default Hero;