import React from 'react'
import Avatar from './hero/Avatar'
import MainNav from './nav/MainNav'

export default function Hero() {
    return (
        <section className="hero">
            <Avatar />
            <MainNav />
        </section>
    )
}