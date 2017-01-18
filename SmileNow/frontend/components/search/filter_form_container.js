import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';

import FilterForm from './search';

const mapStateToProps = (state, ownProps) => ({
  filters : {
    search: state.filters.filterId
  },
  tags: state.business.tags
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filterId) => dispatch(updateFilter(filterId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
