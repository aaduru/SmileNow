import { fetchBusinesses } from './business_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";
export const BUSINESS_SEARCH = "BUSINESS_SEARCH";

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//   dispatch(changeFilter(filter, value));
//   return fetchBusinesses(getState().filters)(dispatch);
// };

export const updateFilter = (filterId) => (dispatch, getState) => {
  dispatch(changeFilter(filterId));
  dispatch(fetchBusinesses(getState().filters.search, getState().filters.filterId));
};

export const changeFilter = (filterId) => ({
  type: UPDATE_FILTER,
  filterId
});

export const businessSearch = (name) => ({
  type: BUSINESS_SEARCH,
  name
});


export const updateSearch = (name) => (dispatch, getState) => {
  dispatch(businessSearch(name));
  dispatch(fetchBusinesses(getState().filters.search, getState().filters.filterId));
};
