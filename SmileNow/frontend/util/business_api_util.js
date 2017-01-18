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
    console.log(url);
    if (search) {
      url += `search=${search}`;
      console.log(url);

      if (filter){
        url += '&';
        // console.log(url);

      }
    }
    if (filter) {
      url += `filter=${filter}`;
      // console.log(url);

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
