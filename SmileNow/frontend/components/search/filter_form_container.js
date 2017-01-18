import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filters_actions';

import FilterForm from './filter_form';

const mapStateToProps = (state, ownProps) => ({

  filters : {
    search: state.filters.filterId
  }
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filterId) => dispatch(updateFilter(filterId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
