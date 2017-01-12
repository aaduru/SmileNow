import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  business: BusinessReducer
});

export default RootReducer;
