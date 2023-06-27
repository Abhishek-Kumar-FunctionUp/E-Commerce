import React from "react";
import { NavLink } from "react-router-dom";
import './navabr.css';

export default function Navbar() {
  return (
    <>
      <div className="head">
        <NavLink to="/">Ecommerce</NavLink>
        <NavLink className="home" to="/">Home</NavLink>
        <NavLink className="home" to="/">AboutUS</NavLink>
        <NavLink className="home" to="/">Feather</NavLink>
        <NavLink to="/mycart">My Cart</NavLink>
      </div>
    </>
  );
}