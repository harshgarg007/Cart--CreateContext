import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

// initial state of cart
const initialState = {
  products: [], // list of products fetched from an API request
  cart: [],
  filterCategory: "all",
  sortPrice: "none",
  searchQuery: "", // new state for search query
};

// Action types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREMENT_QTY = "INCREMENT_QTY";
const DECREMENT_QTY = "DECREMENT_QTY";
const SET_FILTER_CATEGORY = "SET_FILTER_CATEGORY";
const SET_SORT_PRICE = "SET_SORT_PRICE";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY"; // new action type for search query

// Reducer
const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item is already in the cart
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        // If item is already in the cart, increase its quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If item is not in the cart, add it with an initial quantity of 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case INCREMENT_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREMENT_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case SET_FILTER_CATEGORY:
      return { ...state, filterCategory: action.payload };
    case SET_SORT_PRICE:
      return { ...state, sortPrice: action.payload };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_SEARCH_QUERY: // handle search query
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

// Context and Provider
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // fetch product from api
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch({ type: SET_PRODUCTS, payload: response.data });
      } catch (error) {
        console.log("error fetchProduct", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
