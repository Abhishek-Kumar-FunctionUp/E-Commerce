const initialState = {
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
        };
      case 'LOGIN':
        const { username, password } = action.payload;
        // Check if the username and password match the registered user data
        // For simplicity, we'll assume the login is successful
        if (username === 'registeredUser' && password === 'password') {
          return {
            ...state,
            isAuthenticated: true,
          };
        } else {
          return state;
        }
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  