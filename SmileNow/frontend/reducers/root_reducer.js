import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';
import BusinessesReducer from './businesses_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  business: BusinessReducer,
  businesses: BusinessesReducer
});

export default RootReducer;
