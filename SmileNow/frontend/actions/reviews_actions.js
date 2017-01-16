import * as ReviewUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "CREATE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const fetchReviews = (businessId) => dispatch => (
  ReviewUtil.fetchReviews(businessId).then(rev => dispatch(receiveReviews(rev)))
);

export const createReview = (businessId, review) => dispatch => (
  ReviewUtil.createReview(businessId, review).then(rev => dispatch(receiveReview(rev)))
);

// export const updateReview = (businessId, reviewId, review) => dispatch => (
//   ReviewUtil.updateReview(businessId, reviewId, review).then(rev => dispatch(receiveReview(rev)))
// );
//
// export const deleteReview = (businessId, reviewId) => dispatch => (
//   ReviewUtil.deleteReview(businessId, reviewId).then(rev => dispatch(removeReview(rev)))
// );

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

// export const removeReview = (reviewId, businessId) => ({
//   type: REMOVE_REVIEW,
//   reviewId,
//   businessId
// });
