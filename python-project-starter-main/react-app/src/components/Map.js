import React from 'react';
import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {

  const mapContainerStyle = {
      width: "100%",
      height: "200px",
  }

  const center = {
    lat: 37.772,
    lng: -122.214
  }

  const position = {
    lat: 37.772,
    lng: -122.214
  }

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyAg8tmXLKFPmmw4yuAcTQYnhqmGQLuUqdY'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
      >
        <Marker position={position} />

      </GoogleMap>
    </LoadScript>
  )
}

export default Map;