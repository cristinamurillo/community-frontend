import React, { Component } from 'react';
import menuIcon from '../menu-icon.png'
import searchIcon from '../search-icon.png'
import profileIcon from '../profile-icon.png'


class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <div className="icon-circle"><img src={menuIcon} className="icon" alt="menu-icon"/></div>
                <img src={searchIcon} className="icon" alt="search-icon"/>
                <img src={profileIcon} className="icon" alt="profile-icon"/>

            </div>
        );
    }
}

export default Navbar;