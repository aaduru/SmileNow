import { RECEIVE_BUSINESS } from '../actions/business_actions';
import merge from 'lodash/merge';

const BusinessReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BUSINESS:
    // console.log(action.business);
      // return merge({}, state, {[action.business.id]: action.business});
      return action.business;
    default:
      return state;
  }
};

export default BusinessReducer;
