import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removecart } from '../redux/actions';
import Navbar from './navbar';
import './mycart.css';

const MyCart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

    const handleRemoveFromCart = (itemId) => {
      dispatch(removecart(itemId));
    };

  return (
    <>
    <Navbar/>
    <div className="my-cart">
      <h3>My Cart</h3>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">No items in the cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <img src={item.image} alt={item.title} className="item-image" />
              <div>
                <h4 className="item-title">{item.title}</h4>
                <p className="item-price">${item.price}</p>
              </div>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default MyCart;
