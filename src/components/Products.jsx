// import React from 'react';
// import { useCart } from '../context/CartContext';
// import Product from './Product';

// const Products = () => {
//   const { state } = useCart();

//   const filteredProducts = state.products
//   .filter(product =>
//     product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
//   )
//   .filter(product => {
//     if (state.filterCategory === 'all') return true;
//     return product.category === state.filterCategory;
//   });

//   const sortedProducts = filteredProducts.sort((a, b) => {
//     if (state.sortPrice === 'low-to-high') {
//       return a.price - b.price;
//     }
//     if (state.sortPrice === 'high-to-low') {
//       return b.price - a.price;
//     }
//     return 0;
//   });

//   return (
//     <div className="products">
//       {sortedProducts.map(product => (
//         <Product key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default Products;

import React from "react";
import { useCart } from "../context/CartContext";
import Product from "./Product";

const Products = () => {
  const { state } = useCart();

  // Apply search filter
  const filteredProducts = state.products
    .filter((product) =>
      product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    )
    .filter((product) => {
      if (state.filterCategory === "all") return true;
      return product.category === state.filterCategory;
    });

  // Apply sort filter
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (state.sortPrice === "low-to-high") {
      return a.price - b.price;
    }
    if (state.sortPrice === "high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="products">
      {sortedProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
