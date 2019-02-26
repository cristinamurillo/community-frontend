import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import menuIcon from '../menu-icon.png'
import searchIcon from '../search-icon.png'
import profileIcon from '../profile-icon.png'
import axios from 'axios'


class Navbar extends Component {

    state = {
        organization: null
    }

    componentDidMount(){
        axios.get('http://localhost:3000/users/1')
        .then(response => {
            this.setState({
                organization: response.data.organization || null
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
 
    goToOrgProfile = () => {
        this.props.history.push('/orgprofile')
    }

    render() {
        return (
            <div className="nav">
                <h5 className="title-logo">Acts of Democracy</h5>
                <div className="icon-circle"><img src={menuIcon} className="icon" alt="Menu icon"/></div>
                <img src={searchIcon} className="icon" alt="Search icon"/>
                <img src={profileIcon} className="icon" alt="Profile icon"/>
                {this.state.organization && <img src={this.state.organization.icon_url} className="icon" alt="Organization icon" onClick ={this.goToOrgProfile}/>}
            </div>
        );
    }
}

export default withRouter(Navbar);
