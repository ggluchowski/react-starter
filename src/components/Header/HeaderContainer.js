import {connect} from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  headersContent: state.headersContent,
});

export default connect(mapStateToProps)(Header);