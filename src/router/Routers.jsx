import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../pages/layout/HomeLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [{
        path:'/',
      }]
    }
  ]);
  
  export default router;