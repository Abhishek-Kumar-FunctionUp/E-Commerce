import { combineReducers } from 'redux';
import userReducer from './reducer';
import authReducer from './autoreducer';

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
});

export default rootReducer;