import React from 'react'
import MainBanner from './header/MainBanner'
import LightDarkToggle from '../ui/LightDarkToggle';


export default function Body() {
    return (
        <header>
            <LightDarkToggle />
            <MainBanner />
        </header>
    )
}
