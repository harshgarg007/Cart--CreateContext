import React from "react";
import { useCart } from "../context/CartContext";

const Product = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="product">
      <img
        src={product.image}
        alt=""
        style={{
          width: "150px",

          height: "150px",
          objectFit: "contain",
        }}
      />
      <h3>{product.title.slice(0, 20)}</h3>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
