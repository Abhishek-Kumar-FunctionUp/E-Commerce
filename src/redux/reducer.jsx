// reducer.js

const initialState = {
    registeredUsers: [], 
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          registeredUsers: [...state.registeredUsers, action.payload],
        };
     
      default:
        return state;
    }
  };
  
  export default userReducer;
  
  