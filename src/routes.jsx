import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Product from "./pages/product/Product";
import Blog from "./pages/Blog";
import Customers from "./pages/Customers";
import Auth from "./pages/auth/Auth";
import BlogPosts from "./pages/BlogPosts";
import BlogPost from "./pages/BlogPost";

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
        path: "blog",
        element: <Blog />,
        children: [
          {
            path: "posts",
            element: <BlogPosts />
          },
          {
            path: "post/:id?",
            element: <BlogPost />
          },
          {
            path: "new",
            element: <BlogPost />
          }
        ]
      },
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  },
  { path: "auth", element: <Auth /> },
]);
