import React from 'react';
import {useEffect} from 'react';
import MainBanner from './header/MainBanner'
import LightDarkToggle from '../ui/LightDarkToggle';



export default function Body() {
    const [isFixed, setIsFixed] = React.useState(false);

    useEffect(() => {
        const onScroll = () => {
            const header = document.querySelector('header');
                setIsFixed(window.scrollY > 0);
            
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <header className={isFixed ? 'fixed':''} >
            <MainBanner fixed={isFixed}/>
            <LightDarkToggle />
        </header>
    )
}
