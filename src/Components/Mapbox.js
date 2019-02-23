import React, { Component } from 'react';
import ReactMapGL, {NavigationControl} from 'react-map-gl';


class Mapbox extends Component {
    state = {
        viewport: {
          width: '90wh',
          height: '70vh',
          latitude: 40.730610,
          longitude: -73.935242,
          zoom: 10
        }
      };

    updateViewport = (viewport) => {
        this.setState({viewport})
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
            <div style={{position: 'absolute', right: 0}}>
            <NavigationControl onViewportChange={this.updateViewport} />
            </div>
        </ReactMapGL>
 
          </div>
        );
      }
}

export default Mapbox;
