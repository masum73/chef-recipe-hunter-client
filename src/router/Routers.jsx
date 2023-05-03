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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch(`http://localhost:5000/`)
      },
      {
        path: '/chef/:id',
        element: <SingleChef></SingleChef>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
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