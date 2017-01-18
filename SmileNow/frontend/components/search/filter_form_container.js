import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filters_actions';
import { fetchBusinesses } from '../../actions/business_actions';

import FilterForm from './filter_form';

const mapStateToProps = (state, ownProps) => ({

  filters : {
    search: state.filters.filterId
  }
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filterId) => dispatch(updateFilter(filterId)),
  fetchBusinesses: (search, filterId) => dispatch(fetchBusinesses(search, filterId))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
