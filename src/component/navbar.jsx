import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import "./navabr.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
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
        <NavLink to="/myCart" className="navbar-link">
          MyCart
        </NavLink>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
