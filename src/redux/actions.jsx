export const registerUser = (userData) => {
    return {
      type: 'REGISTER_USER',
      payload: userData,
    };
  };
  
  export const login = (username, password) => {
    return {
      type: 'LOGIN',
      payload: {
        username,
        password,
      },
    };
  };
  
  export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const removecart = (index) => {
    return {
      type: 'REMOVE_CART',
      payload: index,
    };
  };
  
  export const loginSuccess = () => {
    return {
      type: 'LOGIN_SUCCESS',
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  