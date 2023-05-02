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
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default HomeLayout;

