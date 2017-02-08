import { connect } from 'react-redux';
import { createReview } from '../../actions/reviews_actions.js';
import { receiveReviewErrors } from '../../actions/errors_actions';


import ReviewForm from './review_form';

const mapStateToProps = ({review_error}) => ({
  errors: review_error
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  createReview: (id,review) => dispatch(createReview(id, review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
