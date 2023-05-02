import React from 'react';
import Navigation from '../shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div style={{ minHeight: 'calc(100vh - 428px)' }} className="md">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;