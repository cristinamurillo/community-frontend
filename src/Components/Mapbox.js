import React, { Component } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import mapIcon from '../map-marker-icon.png'
import Pin from './Pin'

class Mapbox extends Component {
    state = {
        viewport: {
          width: '130vh',
          height: '70vh',
          latitude: 40.730610,
          longitude: -73.935242,
          zoom: 10
        },
        popupInfo: null
      };

    updateViewport = (viewport) => {
        this.setState({viewport})
    }

    renderOpportunityMarker(){
        return(
            <Marker
                longitude={-73.935242}
                latitude={40.730610} 
            >
            <Pin size={25}/>
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
                    {this.renderOpportunityMarker()}
                    <div style={{position: 'absolute', right: 4, top: 4}}>
                        <NavigationControl onViewportChange={this.updateViewport} />
                    </div>
                </ReactMapGL>
          </div>
        );
      }
}

export default Mapbox;
