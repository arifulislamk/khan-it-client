import React from 'react';
import { createBrowserRouter } from "react-router";
import Main from '../layout/Main';
import Home from '../pages/Home';
import About from '../pages/About';
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
        }

    ]
  },
]);

export default router;