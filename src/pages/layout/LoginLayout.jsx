import React from 'react';
import Navigation from '../shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;