import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function CustomMap({ style, google, locations = [] }) {
    return (
        <Map
            google={google}
            style={style}
            center={locations[0]}
            initialCenter={{
                lat: 35.5496939,
                lng: -120.7060049
                }}
            zoom={locations.length === 1 ? 18 : 13}
            disableDefaultUI={true}
        >
            {locations.map(
                coords => <Marker position={coords} />
            )}
        </Map>
    )
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBlo1BDGxJ59S-SEhOWLcuUtR04A14sQY0")
})(CustomMap);