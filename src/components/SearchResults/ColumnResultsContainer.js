import { connect } from 'react-redux';
import { getColumnForSearchResults } from '../../redux/cardsRedux';
import ColumnResults from './ColumnResults';

const mapStateToProps = (state, props) => {
  const columnId = props.columnId;
  return {
    columns: getColumnForSearchResults(state, columnId),
  };
};

export default connect(mapStateToProps)(ColumnResults);