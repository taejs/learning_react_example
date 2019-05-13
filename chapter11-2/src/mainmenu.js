import React from 'react'
import {NavLink} from 'react-router-dom'

const selectedStyle = {
    backgroundColor : 'white',
    color : 'slategray'
}

export const MainMenu = () =>
<nav className="main-menu">
    <NavLink to="/">
        hoem
    </NavLink>
    <NavLink to="/events" activeStyle={selectedStyle}>
        [이벤트]
    </NavLink>
    <NavLink to="/contacts" activeStyle={selectedStyle}>
        [고객지원]
    </NavLink>
    <NavLink to="/about" activeStyle={selectedStyle}>
        [대해]
    </NavLink>
</nav>


export const AboutMenu = ({match}) =>
    <div className="about-menu">
        <li>
            <NavLink to="/about"
                style={match.isExcat && selectedStyle}>
                [회사]    
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history"
                style={selectedStyle}>
                [연혁]    
            </NavLink>
        </li>
    </div>