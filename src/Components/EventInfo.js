import React, { Component } from 'react';

class EventInfo extends Component {
    render() {
        const {opportunity} = this.props
        return (
            <div>
                <p>{opportunity.title}</p>
            </div>
        );
    }
}

export default EventInfo;
