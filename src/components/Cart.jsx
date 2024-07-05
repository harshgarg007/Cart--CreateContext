import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const incrementQty = (id) => {
    dispatch({ type: "INCREMENT_QTY", payload: id });
  };

  const decrementQty = (id) => {
    dispatch({ type: "DECREMENT_QTY", payload: id });
  };

  return (
    <>
      <h2 className="head-cart">Shopping Cart</h2>
      <div className="cart">
        {state.cart.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          state.cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <h3>{item.title.slice(0, 20)}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>${item.price * item.quantity}</p>
              <div className="btn">
                <button onClick={() => incrementQty(item.id)}>+</button>
                <button onClick={() => decrementQty(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
