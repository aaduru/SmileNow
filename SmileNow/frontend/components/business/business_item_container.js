import { connect } from 'react-redux';

import { fetchBusiness } from '../../actions/business_actions';
import BusinessReducer from '../../reducers/business_reducer';

import BusinessItem from './business_item';
import { fetchReviews, createReview } from '../../actions/reviews_actions';


const mapStateToProps = (state, ownProps) => ({
  business: state.business,
  reviews: state.reviews,
  tags: state.tags
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBusiness: () => dispatch(fetchBusiness(ownProps.params.businessId)),
  // fetchReviews: (id) => dispatch(fetchReviews(ownProps.params.businessId))
  // createReview: (id, review) => dispatch(createReview(ownProps.params.businessId, review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessItem);
