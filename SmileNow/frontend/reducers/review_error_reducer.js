import { RECEIVE_REVIEW_ERRORS } from '../actions/errors_actions';
import merge from 'lodash/merge';




const ReviewErrorReducer = (state = [] , action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;

      return errors;
    default:
      return state;
  }
};

export default ReviewErrorReducer;
