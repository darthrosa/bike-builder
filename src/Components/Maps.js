import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Maps extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            locations: [
            { lat: 39, lng: -113.3},
            {lat: 47.359423, lng: -122.021071},
            {lat: 47.2052192, lng: -121.9884262},
            {lat: 47.6307081, lng: -122.1434325},
            {lat: 47.3084488, lng: -122.2140121},
            {lat: 47.5524695, lng: -122.0425407}
            ]
        }
    }


    displayMarkers = () => {
        return this.state.locations.map((location, index) => {
            return <Marker key={index} id={index} position={{
            lat: location.lat,
            lng: location.lng
        }}
        onClick={() => console.log("Hit Google Map")} />
        })
    }  

    render() {
        return (
            <Map google={this.props.google}
                 zoom={8}
                 initialCenter={{ lat: 47.444, lng: -122.176}}>
            {this.displayMarkers()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBIV0GJYOAF_glEzZumGBChK_bTtLFRXjs'
 })(Maps);