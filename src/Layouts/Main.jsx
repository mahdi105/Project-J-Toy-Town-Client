import React, { useLayoutEffect } from 'react';
import Header from '../components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
   
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster/>
        </>
    );
};

export default Main;