const initialState = [];

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      
      return [...state, action.payload];
    case 'Remove_Cart':
   
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
