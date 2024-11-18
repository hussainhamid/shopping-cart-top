import NavBar from "./files/nav";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./files/cart";
import Home from "./files/home-page";
import Shop from "./files/shop";
import ErrorPage from "./files/error";

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

// Define routes with the layout
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
