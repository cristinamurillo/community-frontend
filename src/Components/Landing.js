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
        organizer_session: null,
        changeViewport: false
    }

    componentDidMount(){
        this.getUser()
    }

    // method is for testing purposes only, will be refactored to check to see if localstorage has stored a user token  
    getUser = () => {
        axios.get('http://localhost:3000/users/1')
            .then(response => {
                this.setState({
                    organizer_session: response.data.organization || null
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }
    // end test method 

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            changeViewport: true
        })
        console.log(this.state.location)
    }

    viewportChanged = () => {
        this.setState({
            changeViewport: false
        })
    }


    render() {
        return (
            <div>
                {/* {this.getOrganization()} */}
                <Navbar organization={this.state.organizer_session}/>
                <div className="page-content">

                    <h2 id="landing-header">Support Your Community | Raise Your Voice | Connect to Opportunities Near You </h2>
                    <form onSubmit={this.submitHandler}>
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

                    <Mapbox changeViewport={this.state.changeViewport} viewportChanged={this.viewportChanged}location = {this.state.location}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);
