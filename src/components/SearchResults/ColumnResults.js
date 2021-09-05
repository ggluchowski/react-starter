import React from 'react';
//import styles from './SearchResults.scss';
import PropTypes from 'prop-types';

class ColumnResults extends React.Component {
  static propTypes = {
    columns: PropTypes.object,
  }

  render() {
    const { columns } = this.props;
    return (
      <div>
        Column title: {columns.title}
      </div>
    );
  }
}

export default ColumnResults;