import { connect } from 'react-redux';

import { updateSearch } from '../../actions/filters_actions';

import Search from './search';

const mapStateToProps = (state, ownProps) => ({
  filters : {
    search: state.filters.search
  }
});

const mapDispatchToProps = dispatch => ({
  updateSearch: (name) => dispatch(updateSearch(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
