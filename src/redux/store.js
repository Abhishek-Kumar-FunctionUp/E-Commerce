// store.js

import { createStore } from 'redux';
// import userReducer from './reducer';
// import authReducer from './autoreducer';
import rootReducer from './rootreducer';
const store = createStore(rootReducer);

export default store;
