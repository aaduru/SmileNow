// export const fetchBusinesses = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/businesses'
//   })
// );

export const fetchBusinesses = (search ,filter) => {

  let url =  'api/businesses';
  if (search || filter ) {
    url += "?";
    if (search) {
      url += `search=${search}`;
      if (filter){
        url += '&';
      }
    }
    if (filter) {
      url += `filter=${filter}`;
    }
  }
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
