import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Maps extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            locations: [
            { lat: 39, lng: -113.3},
            {lat: 37.0965, lng: -113.5684},
            {lat: 37.2982, lng: -113.0263},
            {lat: 40.6461, lng: -111.4980},
            {lat: 38.573, lng: -109.549}
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
            <div id='google-map'>
                <Map google={this.props.google}
                     zoom={7.7}
                     initialCenter={{ lat: 39, lng: -112}}>
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    
 })(Maps);