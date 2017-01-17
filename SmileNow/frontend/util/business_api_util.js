// export const fetchBusinesses = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/businesses'
//   })
// );

// export const fetchBusinesses = (filter_content, search, filterId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/businesses?search=${filter_content.search}&filterId=${filter_content.filterId}`
//   })
// );

export const fetchBusinesses = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses',
    data
  })
);

export const fetchBusiness = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);
