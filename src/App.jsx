import NavBar from "./files/nav";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./files/cart";
import Home from "./files/home-page";
import Shop from "./files/shop";
import ErrorPage from "./files/error";
import "./App.css";
import { useState } from "react";

function Layout({ addToCart, cart, removeFromCart }) {
  return (
    <>
      <NavBar />
      <main>
        <Outlet context={{ addToCart, cart, removeFromCart }} />
      </main>
    </>
  );
}

const router = (addToCart, cart, removeFromCart) =>
  createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          addToCart={addToCart}
          cart={cart}
          removeFromCart={removeFromCart}
        />
      ),
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

  return <RouterProvider router={router(addToCart, cart, removeFromCart)} />;
}
