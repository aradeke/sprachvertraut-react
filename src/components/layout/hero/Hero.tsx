import React from 'react'
import {useEffect} from 'react';
import Avatar from './Avatar'
import MainNav from '../nav/MainNav'

import Main from "../Main";

export default function Hero() {
    
    const [isFixedHero, setIsFixedHero] = React.useState(false);
    const [headerHeight, setHeaderHeight] = React.useState(0);
    
        
    useEffect(() => {
        const header = document.querySelector('header');
        if(!header) return;
        setHeaderHeight(header.getBoundingClientRect().height)

        const onScrollHero = () => {
            setIsFixedHero(window.scrollY > headerHeight);
            
        }
        window.addEventListener('scroll', onScrollHero);
        return () => window.removeEventListener("scroll", onScrollHero);
    }, []);

    return (
        <section id="hero" className={isFixedHero ? 'hero--fixed':'hero'}>
            <Avatar fixed={isFixedHero} />
            <MainNav fixed={isFixedHero} />
        </section>
    )
}