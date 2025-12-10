import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Contact from '../../pages/Contact';
import CV from '../../pages/CV';

export default function RootLayout() {
    return (
        <>
            <Header/>
            <Hero/>
            <CV />
            <Contact />
            <Footer />
        </>
    )
}