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
</nav>