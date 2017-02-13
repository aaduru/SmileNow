import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS_ERRORS } from '../actions/business_actions';
import merge from 'lodash/merge';


const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BUSINESSES:
      return merge({}, action.businesses);
    default:
      return state;
  }
};

export default BusinessesReducer;
