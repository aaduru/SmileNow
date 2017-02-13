import { RECEIVE_BUSINESS_ERRORS } from '../actions/business_actions';
import merge from 'lodash/merge';


const BusinessErrorReducer = (state = [] , action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESS_ERRORS:
      const errors = action.errors;
      return errors;
    default:
      return state;
  }
};

export default BusinessErrorReducer;
