import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';
import BusinessesReducer from './businesses_reducer';
import ReviewsReducer from './reviews_reducer';
import FiltersReducer from './filters_reducer';
import ReviewErrorReducer from './review_error_reducer';
import BusinessErrorReducer from './business_error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  business: BusinessReducer,
  businesses: BusinessesReducer,
  filters: FiltersReducer,
  review_error: ReviewErrorReducer
});

export default RootReducer;
