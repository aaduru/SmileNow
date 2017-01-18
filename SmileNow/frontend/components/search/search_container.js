import { connect } from 'react-redux';

import { updateSearch } from '../../actions/filters_actions';
import { fetchBusinesses } from '../../actions/business_actions';

import Search from './search';

const mapStateToProps = (state, ownProps) => ({
  filters : {
    search: state.filters.search
  }
});

const mapDispatchToProps = dispatch => ({
  updateSearch: (name) => dispatch(updateSearch(name)),
  fetchBusinesses: (search, filterId) => dispatch(fetchBusinesses(search, filterId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
