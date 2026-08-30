import React from 'react';
import { createBrowserRouter } from "react-router";
import Main from '../layout/Main';
import Home from '../pages/Home';
import About from '../pages/About';
import WebsiteDevelopment from '../pages/WebsiteDevelopment';
import AppDevelopment from '../pages/AppDevelopment';
import BusinessDigital from '../pages/BusinessDigital.jsx';
import SocialMediaGrowth from '../pages/SocialMediaGrowth.jsx';
import ContactCTA from '../component/ContactCTA.jsx';
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
        },
        {
          path: "/services/business-digital-setup",
          element: <BusinessDigital />
        },
        {
          path: "/services/social-media-growth",
          element: <SocialMediaGrowth />,
        },
        {
          path: "/contact",
          element: <ContactCTA />
        }

    ]
  },
]);

export default router;