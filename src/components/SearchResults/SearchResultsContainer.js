import { connect } from 'react-redux';
import {
  getCardsForSearchResults,
} from '../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const address = props.location.pathname;
  const trimaddress = address.substr(8);
  //const cardId = props.cards.id;
  return {
    cards: getCardsForSearchResults(state, trimaddress),
    //column: getColumnForSearchResults(state, cardId),
    //list: getListForSearchResults(state, card),
  };
};

export default connect(mapStateToProps)(SearchResults);