import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Mapbox from './Mapbox'
import axios from 'axios'

class Landing extends Component {

    state = {
        location: "",
        volunteer: true,
        paid: true,
        organizer_session: false
    }

    getOrganization = () => {
        axios.get('http://localhost:3000/organizations/1')
            .then(response => {
                console.log(response)
                this.setState({
                    organizer_session: true
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                {/* {this.getOrganization()} */}
                <Navbar />
                <div className="page-content">

                    <h2 id="landing-header">Support Your Community | Raise Your Voice | Connect to Opportunities Near You </h2>
                    <form>
                        <input className="text-field" type="text" name="location" placeholder="Search by zip code" value={this.state.location} onChange ={this.changeHandler}/>
                        <label className="checkbox-container"><span className="label-text">Volunteer</span>
                            <input className="checkbox" type="checkbox" name="volunteer"  value={this.state.volunteer} onChange ={this.changeHandler}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container"><span className="label-text">Paid</span>
                            <input className="checkbox" type="checkbox" name="paid"  value={this.state.paid} onChange ={this.changeHandler}/>
                            <span className="checkmark"></span>
                        </label>
                        <input className="text-field submit" type="submit" value="Search"/>
                    </form>

                    <Mapbox />
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);
