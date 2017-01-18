// export const fetchBusinesses = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/businesses'
//   })
// );

export const fetchBusinesses = (search ,filterId) => {
  let url =  'api/businesses';
  if (search || filterId ) {
    url += "?";
    if (search) {
      url += `search=${search}`;
      if (filterId){
        url += '&';
      }
    }
    if (filterId) {
      url += `filterId=${filterId}`;
    }
  }

  // let url = 'api/businesses';
  // if (filterId) {
  //   url += `?filterId=${filterId}`;
  // }

  return $.ajax({
    method: 'GET',
    url
  });
};

// export const fetchBusinesses = (data) => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/businesses',
//     data
//   })
// );

export const fetchBusiness = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);
