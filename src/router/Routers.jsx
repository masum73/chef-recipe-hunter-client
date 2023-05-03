import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/layout/HomeLayout";
import Blog from "../pages/Blog/Blog";
import LoginLayout from "../pages/layout/LoginLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Main from "../pages/Home/Main";
import ErrorPage from "../pages/shared/ErrorPage";
import SingleChef from "../pages/SingleChef/SingleChef";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch(`https://foodaholic-server-masum73.vercel.app/`)
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><SingleChef></SingleChef></PrivateRoute>,
        loader: ({params}) => fetch(`https://foodaholic-server-masum73.vercel.app/chef/${params.id}`)
      }

    ]
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
]);

export default router;