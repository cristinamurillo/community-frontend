import React, { Component } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import CityPin from './CityPin'
import axios from 'axios'

class Mapbox extends Component {
    state = {
        viewport: {
          width: '130vh',
          height: '70vh',
          latitude: 40.730610,
          longitude: -73.935242,
          zoom: 10
        },
        popupInfo: null,
        opportunities: []
      };

    componentDidMount() {
        axios.get('http://localhost:3000/opportunities')
        .then(response => {
            console.log(response.data)
            this.setState({
                opportunities: response.data.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    updateViewport = (viewport) => {
        this.setState({viewport})
    }

    renderOpportunityMarker(opportunity){
        return(
            <Marker
                key={opportunity.id}
                longitude={parseFloat(opportunity.attributes.location.split(', ')[1])}
                latitude={parseFloat(opportunity.attributes.location.split(', ')[0])} 
            >
            <CityPin size={25}/>
            </Marker>
        )
    }

      render() {
        return (
            <div className="map-container">
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={this.updateViewport}
                    mapboxApiAccessToken={'pk.eyJ1IjoieHRpbmFtdXJpbGxvIiwiYSI6ImNqbzhxMTdyMjE5ZTUzcHFxYThuYnR2YWMifQ.j0zHHpzStnhBejvcPq0UXA'}
                    mapStyle={'mapbox://styles/mapbox/streets-v9'}
                >
                    {this.state.opportunities.map(this.renderOpportunityMarker)}
                    <div style={{position: 'absolute', right: 4, top: 4}}>
                        <NavigationControl onViewportChange={this.updateViewport} />
                    </div>
                </ReactMapGL>
          </div>
        );
      }
}

export default Mapbox;
