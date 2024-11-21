import NavBar from "./files/nav";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./files/cart";
import Home from "./files/home-page";
import Shop from "./files/shop";
import ErrorPage from "./files/error";
import "./App.css";
import { useState } from "react";
import { createContext } from "react";

export const ShopContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default function App() {
  const [cart, setcart] = useState([]);

  const addToCart = (product) => {
    setcart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productIndex) => {
    setcart((prevCart) =>
      prevCart.filter((_, index) => index !== productIndex)
    );
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
}
