import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';
import BusinessesReducer from './businesses_reducer';
import ReviewsReducer from './reviews_reducer';
import FiltersReducer from './filters_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  business: BusinessReducer,
  businesses: BusinessesReducer,
  filters: FiltersReducer

});

export default RootReducer;
