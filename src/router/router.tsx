
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import RootLayout from '../components/layout/RootLayout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';


const router = createBrowserRouter( createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> } >
        <Route index element= { <Home />} />
        <Route path="contact" element = { <Contact />} />
    </Route>
));

export default router;