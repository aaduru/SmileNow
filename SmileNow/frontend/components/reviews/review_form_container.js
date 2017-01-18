import { connect } from 'react-redux';
import { createReview } from '../../actions/reviews_actions.js';

import ReviewForm from './review_form';

const mapDispatchToProps = (dispatch, ownProps) => ({
  createReview: (id,review) => dispatch(createReview(id, review))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);