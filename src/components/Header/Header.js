import Container from '../Container/Container';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

class Header extends React.Component {

  static propTypes = {
    headIcon: PropTypes.string,
    headersContent: PropTypes.array,
  }

  render() {
    const { headIcon } = settings.header;
    const { headersContent } = this.props;

    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={headIcon} />
            </Link>
            <nav>
              {headersContent.map(headData => (
                <NavLink key={headData.id} exact to={headData.path} activeClassName='active'>
                  <Icon name={headData.icon} />
                  &nbsp;&nbsp;&nbsp;{headData.title}
                </NavLink>

              ))}
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;