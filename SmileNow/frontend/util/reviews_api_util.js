export const fetchReviews = (businessId) => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}/reviews`
  })
);


export const createReview = (businessId, review) => (
  $.ajax({
    method: 'POST',
    url: `api/businesses/${businessId}/reviews`,
    data: { review }
  })
);

// export const updateReview = (businessId, reviewId, review) => {
//   $.ajax({
//     method: 'PATCH',
//     url: `api/businesses/${businessId}/reviews/${reviewId}`,
//     data: { review }
//   });
// };
//
// export const deleteReview = (businessId, reviewId) => {
//   $.ajax({
//     method: 'DELETE',
//     url: `api/businesses/${businessId}/reviews/${reviewId}`
//   });
// };
