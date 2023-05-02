import React from 'react';
import Navigation from '../shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Banner from '../shared/Banner';
import Footer from '../shared/Footer';

const HomeLayout = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <div style={{ minHeight: 'calc(100vh - 200px)' }} className="md">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default HomeLayout;

