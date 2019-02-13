import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Navbar from './Navbar'

class Landing extends Component {

    state ={
        location: "",
        volunteer: true,
        paid: true
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="page-content">

                <h2 id="landing-header">Support Your Community | Raise Your Voice | Connect to Opportunities Near You </h2>
                <form>
                    <input type="text" name="location" placeholder="Search by zip code" value={this.state.location} onChange ={this.changeHandler}/>
                    <input type="checkbox" name="volunteer"  value={this.state.volunteer} onChange ={this.changeHandler}/>
                    <input type="checkbox" name="paid"  value={this.state.paid} onChange ={this.changeHandler}/>
                    <input type="submit" value="Search"/>
                </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);
