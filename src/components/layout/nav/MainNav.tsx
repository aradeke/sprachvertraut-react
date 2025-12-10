import React from 'react';
import { Route, NavLink, Link} from 'react-router-dom';



export default function MainNav() {
    return(
        <nav>
            <ul>
                <li><NavLink to="/#Home">Home</NavLink></li>
                <li><NavLink to="/#cv">CV</NavLink></li>
                <li><NavLink to="/#skills">Skills</NavLink></li>
                <li>Job-Tool</li>
                <li>Portfolio</li>
                <li><NavLink to="/#contact">Contact</NavLink></li>

            </ul>
        </nav>
    );


}
