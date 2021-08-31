import {connect} from 'react-redux';
import Info from './Info';
import { getHeadersContent } from '../../redux/headersContentReducer';

const mapStateToProps = state => ({
  headersContent: getHeadersContent(state, 'Info'),
});

export default connect(mapStateToProps)(Info);