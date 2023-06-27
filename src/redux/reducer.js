// reducer.js

const initialState = {
    registeredUsers: [], // Initialize the registeredUsers state as an empty array
    // other state properties...
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          registeredUsers: [...state.registeredUsers, action.payload],
        };
      // other cases...
      default:
        return state;
    }
  };
  
  export default userReducer;
  
  