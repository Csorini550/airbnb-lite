import React from 'react';

import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';





// var map;
// function initMap() {
//   var geocoder = new Geocoder();

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: 0, lng: 0 },
//     zoom: 8
//   });

//   geocoder.geocode({ 'address': "Chicago" }, function (results, status) {
//     if (status === 'OK') {
//       map.setCenter(results[0].geometry.location);
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }



const Map = ({ location }) => {
  const mapContainerStyle = {
    height: "400px",
    width: "800px"
  }

  const defaultCenter = {
    lat: 37.772,
    lng: -122.214
  }

  const defaultPosition = {
    lat: 37.772,
    lng: -122.214
  }

  const center = {
    lat: location.lat,
    lng: location.lng
  }

  const position = {
    lat: location.lat,
    lng: location.lng
  }

  return (
    <div id='map-container'>
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

    </div>
  )
}

export default Map;