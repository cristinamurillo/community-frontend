import React, { Component } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl, FlyToInterpolator} from 'react-map-gl';
import CityPin from './CityPin'
import axios from 'axios'
const mapboxToken= 'pk.eyJ1IjoieHRpbmFtdXJpbGxvIiwiYSI6ImNqbzhxMTdyMjE5ZTUzcHFxYThuYnR2YWMifQ.j0zHHpzStnhBejvcPq0UXA'
class Mapbox extends Component {
    state = {
        viewport: {
          width: '130vh',
          height: '70vh',
          latitude: 40.730610,
          longitude: -73.935242,
          zoom: 10,
          bearing: 0,
          pitch: 0
        },
        popupInfo: null,
        opportunities: []
      };

    componentDidMount() {
        console.log("remounted")
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

        console.log(this.props)
        
    }

    updateViewport = viewport => this.setState({
        viewport: {...this.state.viewport, ...viewport}
      })


    goToViewport = (location) => {
        this.props.viewportChanged()
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxToken}`)
            .then(response => {

                console.log('call being made')
                this.updateViewport({
                    longitude: response.data.features[0].center[0],
                    latitude: response.data.features[0].center[1],
                    zoom: 14,
                    transitionInterpolator: new FlyToInterpolator(),
                    transitionDuration: 2000
                  });
            })
            .catch(error => {
                console.log(error)
            })

       
      };

    renderOpportunityMarker = (opportunity) => {
        if(this.opportunityValid(opportunity.attributes)){
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
    }
    //checks if opportunity meets search criteria
    opportunityValid = (opportunity) => {
        console.log(this.props.date)
        let oppDate = new Date (opportunity.date)
        if(((this.props.volunteer && !opportunity.paid) 
        || (this.props.paid && opportunity.paid))
        && oppDate >= this.props.date){
            return true 
        } else {
            return false
        }
    }

      render() {
        {this.props.changeViewport && this.goToViewport(this.props.location)}
        return (
            <div className="map-container">
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={this.updateViewport}
                    mapboxApiAccessToken={mapboxToken}
                    dragToRotate={false}
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
