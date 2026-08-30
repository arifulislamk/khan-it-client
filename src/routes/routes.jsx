import React from 'react';
import { createBrowserRouter } from "react-router";
import Main from '../layout/Main';
import Home from '../pages/Home';
import About from '../pages/About';
import WebsiteDevelopment from '../pages/WebsiteDevelopment';
import AppDevelopment from '../pages/AppDevelopment';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/about",
            element: <About /> ,
        },
        {
          path: "/services/web-development",
          element: <WebsiteDevelopment />,
        },
        {
          path: "/services/app-development",
          element: <AppDevelopment />,
        }

    ]
  },
]);

export default router;