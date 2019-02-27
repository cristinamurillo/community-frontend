import React, { Component } from 'react';
import Navbar from './Navbar'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class OrganizationProfile extends Component {

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

    render() {
        if(this.state.organization){

            return (
                <div>
                    <Navbar />
                    <div className="page-content margined flexed" >
                        <div className="col1">
                            <div className="org-header">
                                <img src={this.state.organization.icon_url} className="icon" alt="Organization icon" />
                                <h4 className ="page-header">{this.state.organization.name}</h4>
                            </div>
                            <div className="whitebox">
                                <p>{this.state.organization.description}</p>
                                <p>{this.state.organization.description}</p>
                            </div>
                            <h5>Past Events</h5>
                            <h5>Website</h5>

                        </div>
                        <div className="col2">
                            <h5 className= "org-prof-tab">Upcoming Opportunities</h5>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <p>Not connected to server</p>
            )
        }
    }
}

export default withRouter(OrganizationProfile);
