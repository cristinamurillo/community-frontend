import React, { Component } from 'react';

class EventInfo extends Component {
    render() {
        const {opportunity} = this.props
        console.log(opportunity)
        return (
            <div>
                <h6 className= "popup-orgname">{opportunity.title}</h6>
                <p className= "popup-orgname">Organization Name</p>
                <img className="popup-img" src={opportunity['img-url']} alt="Event Image"/>
            </div>
        );
    }
}

export default EventInfo;
