const initialState = [];

const cartReducer = (state = initialState, action) => {
  // Handle different actions to update the cart state
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add the item to the cart state
      return [...state, action.payload];
    case 'Remove_Cart':
      // Remove the item from the cart state
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
