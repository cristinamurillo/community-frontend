import React, { Component } from 'react';
import menuIcon from '../menu-icon.png'
import searchIcon from '../search-icon.png'
import profileIcon from '../profile-icon.png'


class Navbar extends Component {

 
    render() {
        return (
            <div className="nav">
                <h5 className="title-logo">Acts of Democracy</h5>
                <div className="icon-circle"><img src={menuIcon} className="icon" alt="Menu icon"/></div>
                <img src={searchIcon} className="icon" alt="Search icon"/>
                <img src={profileIcon} className="icon" alt="Profile icon"/>
                {this.props.organization && <img src={this.props.organization.icon_url} className="icon" alt="Organization icon"/>}
            </div>
        );
    }
}

export default Navbar;
