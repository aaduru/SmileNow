import { UPDATE_FILTER,
         BUSINESS_SEARCH } from '../actions/filters_actions';
import { merge } from 'lodash';

const _defaultState = {
  search: "",
  filterId: 0
};

const FiltersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return merge({}, state, action.filters.filterId);
    case BUSINESS_SEARCH:
      return merge({}, state, action.filters.search);
    default:
      return state;
  }
};

export default FiltersReducer;
