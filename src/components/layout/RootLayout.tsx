import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Main from './Main';

export default function RootLayout() {
    return (
        <>
            <div id="spacer" ></div>
            <Header/>
            <Hero/>
            <Main />
            <Footer />
        </>
    )
}