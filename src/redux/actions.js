// // actions.js
// actions.js

export const registerUser = (userData) => {
    return {
      type: 'REGISTER_USER',
      payload: {
        ...userData,
        isAuthenticated: false,
      },
    };
  };
  export const login = (username, password) => ({
    type: 'LOGIN',
    payload: {
      username,
      password,
    },
  });
  export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  export const removecart=(product)=>({
type:'Remove_Cart',
payload:product
  })
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
  


  
  








// export const registerUser = (userData) => {
//     return {
//       type: 'REGISTER_USER',
//       payload: userData,
//     };
//   };
  
//   export const loginUser = (username, password) => {
//     return {
//       type: 'LOGIN_USER',
//       payload: { username, password },
//     };
//   };
  
//   export const logoutUser = () => {
//     return {
//       type: 'LOGOUT_USER',
//     };
//   };
  