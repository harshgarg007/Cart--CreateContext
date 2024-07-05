import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Filters /> <Products></Products>
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart />
        </>
      ),
    },
  ]);

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
