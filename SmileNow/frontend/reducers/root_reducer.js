import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';
import BusinessesReducer from './businesses_reducer';
import ReviewsReducer from './reviews_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  business: BusinessReducer,
  businesses: BusinessesReducer,
  reviews: ReviewsReducer
});

export default RootReducer;
