import { connect } from 'react-redux';

import { fetchBusiness } from '../../actions/business_actions';
import BusinessReducer from '../../reducers/business_reducer';

import BusinessItem from './business_item';

const mapStateToProps = (state, ownProps) => ({
  business: state.business
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBusiness: () => dispatch(fetchBusiness(ownProps.params.businessId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessItem);
