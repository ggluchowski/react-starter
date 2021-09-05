import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
//import { Link } from 'react-router-dom';
import ColumnResults from './ColumnResultsContainer';
//import ListResults from './ListResultContainer';


class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.string,
  }
  static defaultProps = {
    icon: settings.search.icon,
  }

  render() {
    const { cards, icon } = this.props;
    return (
      <Container>
        <section className={styles.component}>

          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            <div>Search Results:</div>
          </h3>

          <div>
            {cards.map(cardData => (
              <div key={cardData.id}>
                <Card key={cardData.id} {...cardData} />
                <ColumnResults key={cardData.columnId} {...cardData}/>
                {/* <ListResults /> */}
              </div>
            ))}

          </div>

        </section>
      </Container>
    );
  }
}

export default SearchResults;