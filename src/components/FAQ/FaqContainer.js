import {connect} from 'react-redux';
import Faq from './Faq';
import { getHeadersContent } from '../../redux/headersContentReducer';

const mapStateToProps = state => ({
  headersContent: getHeadersContent(state, 'FAQ'),
});

export default connect(mapStateToProps)(Faq);