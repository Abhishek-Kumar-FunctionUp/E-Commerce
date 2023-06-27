// authReducer.js
// authReducer.js

const initialState = {
  isAuthenticated: false,
  // other relevant properties
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    // other cases and state updates for login, registration, etc.
    default:
      return state;
  }
};

export default authReducer;

 