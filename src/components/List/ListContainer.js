import { connect } from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn } from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredList = state.lists.filter(list => list.id == id);
  const listParams = filteredList[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const id = props.match.params.id;

  return {
    addColumn: title => dispatch(createActionAddColumn({
      listId: id,
      title,
    })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);