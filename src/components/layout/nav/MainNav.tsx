import React from 'react';
import { Route, NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faIdBadge, faBriefcase, faUserGear, faAt } from '@fortawesome/free-solid-svg-icons';
import Hex from '../../ui/Hex'



export default function MainNav({fixed}: {fixed:boolean}) {
    return(
        <nav id="main_nav" className={`main_nav_base main_nav${fixed ? '--fixed':''}`}>
            <ul>
                <li><NavLink to="/#home"><Hex /><FontAwesomeIcon icon={faHome} /></NavLink></li>
                <li><NavLink to="/#cv"><Hex /><FontAwesomeIcon icon={faIdBadge} /></NavLink></li>
                <li><NavLink to="/#skills"><Hex /><FontAwesomeIcon icon={faUserGear}/></NavLink></li>
                <li><NavLink to="/#portfolio"><Hex /><FontAwesomeIcon icon={faBriefcase} /></NavLink> </li>
                

            </ul>
        </nav>
    );


}
