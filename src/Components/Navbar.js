import React, { Component } from 'react';
import menuIcon from '../menu-icon.png'
import searchIcon from '../search-icon.png'
import profileIcon from '../profile-icon.png'


class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <h5 className="title-logo">Acts of Democracy</h5>
                <div className="icon-circle"><img src={menuIcon} className="icon" alt="menu-icon"/></div>
                <img src={searchIcon} className="icon" alt="search-icon"/>
                <img src={profileIcon} className="icon" alt="profile-icon"/>

            </div>
        );
    }
}

export default Navbar;
