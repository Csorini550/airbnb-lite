import React from 'react';
import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ lat, lng }) => {
  // console.log(lat, lng)

  const mapContainerStyle = {
    width: "100%",
    height: "200px",
  }

  const defaultCenter = {
    lat: 37.772,
    lng: -122.214
  }

  const defaultPosition = {
    lat: 37.772,
    lng: -122.214
  }

  // const center = {
  //   lat: lat.lat,
  //   lng: lng.lng
  // }



  return (
    <LoadScript
      googleMapsApiKey='AIzaSyAg8tmXLKFPmmw4yuAcTQYnhqmGQLuUqdY'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultPosition} />

      </GoogleMap>
    </LoadScript>
  )
}

export default Map;