import React from "react";
import { useCart } from "../context/CartContext";

const Filters = () => {
  const { dispatch } = useCart();

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    dispatch({
      type: "SET_FILTER_CATEGORY",
      payload: value,
    });
    // console.log(value);
  };

  const handleSortChange = (e) => {
    dispatch({ type: "SET_SORT_PRICE", payload: e.target.value });
  };

  const handleSearchChange = (e) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
      />

      <select onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="men's clothing">Men's</option>
        <option value="women's clothing">Women's</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
      <select onChange={handleSortChange}>
        <option value="none">Sort By Price</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
    </div>
  );
};

export default Filters;
