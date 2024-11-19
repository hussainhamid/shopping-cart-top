import NavBar from "./files/nav";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import Cart from "./files/cart";
import Home from "./files/home-page";
import Shop from "./files/shop";
import ErrorPage from "./files/error";
import "./App.css";

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
  return <RouterProvider router={router} />;
}
