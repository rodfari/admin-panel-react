import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Product from "./pages/product/Product";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Auth from "./pages/auth/Auth";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    action: () => {},
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "products/:id?",
        element: <Product />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  },
  { path: "auth", element: <Auth /> },
]);
