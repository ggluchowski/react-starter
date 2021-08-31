import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/HeaderContainer';

class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    headersContent: PropTypes.array,
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

export default MainLayout;