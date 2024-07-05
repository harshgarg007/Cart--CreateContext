import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { state } = useCart();

  // Calculate the total quantity of items in the cart
  const totalQuantity = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Cart 🛒
        {totalQuantity > 0 && <span>{totalQuantity}</span>}
      </NavLink>
    </nav>
  );
};

export default Navbar;
