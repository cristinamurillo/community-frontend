import React, { Component } from 'react';
import Navbar from './Navbar'
import {withRouter} from 'react-router-dom'

class OrganizationProfile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="page-content" >
                hi
                </div>
            </div>
        );
    }
}

export default withRouter(OrganizationProfile);
