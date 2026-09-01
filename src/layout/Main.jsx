import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../component/ScrollTop';

const Main = () => {
    return (
        <div>
             <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;