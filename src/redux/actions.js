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
  