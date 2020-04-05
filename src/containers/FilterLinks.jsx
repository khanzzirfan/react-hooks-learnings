import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Footer from '../components/Footer';

const mapStateToProps = (state) => ({
  visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (filter) => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
