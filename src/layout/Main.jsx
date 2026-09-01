import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../component/ScrollTop';
import ButtonWhatsMess from '../component/ButtonWhatsMess';

const Main = () => {
    return (
        <div>
             <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
            <ButtonWhatsMess />
        </div>
    );
};

export default Main;