import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import "./navabr.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());

    // Perform any additional logout logic if needed

    // Redirect to the login page or any other desired page
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="navbar-link">
          Ecommerce
        </NavLink>
        <NavLink to="/" className="navbar-link">
          Home
        </NavLink>
        <NavLink to="/" className="navbar-link">
          About Us
        </NavLink>
        <NavLink to="/" className="navbar-link">
          Feather
        </NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="/mycart" className="navbar-link">
          <i className="fas fa-shopping-cart"></i> My Cart
        </NavLink>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
