import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/layout/HomeLayout";
import Blog from "../pages/Blog/Blog";
import LoginLayout from "../pages/layout/LoginLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Main from "../pages/Home/Main";
import Terms from "../pages/Terms/Terms";
import ErrorPage from "../pages/shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Main></Main>
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
        path: '/terms',
        element: <Terms></Terms>
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