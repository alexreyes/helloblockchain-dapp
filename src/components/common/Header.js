import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: "#F15B2A" };

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/request" activeStyle={activeStyle}>
                Request
            </NavLink>
            {" | "}
            <NavLink to="/response" activeStyle={activeStyle}>
                Response
            </NavLink>
        </nav>
    );
};

export default Header;