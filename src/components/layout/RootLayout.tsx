import React from 'react';
//import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './hero/Hero';
import Main from './Main';
import HexCanvas from './HexCanvas';

export default function RootLayout() {
    return (
        <>
            <HexCanvas/>
            <div id="spacer" ></div>
            <Header/>
            <Hero/>
            <Main />
            <Footer />
        </>
    )
}