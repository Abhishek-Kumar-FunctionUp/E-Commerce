import { combineReducers } from 'redux';
import userReducer from './reducer';
import authReducer from './authReducer';
import cartReducer from './cartreducer';
const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  cartItems: cartReducer,
});

export default rootReducer;