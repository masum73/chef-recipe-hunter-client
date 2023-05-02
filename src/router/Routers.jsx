import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/layout/HomeLayout";
import Blog from "../pages/Blog/Blog";
import LoginLayout from "../pages/layout/LoginLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Main from "../pages/Home/Main";
import Terms from "../pages/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Main></Main>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
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
      }
    ]
  }
]);

export default router;