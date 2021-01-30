import React, { useSelector } from 'react';

import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';




const Map = ({ venue, venueId }) => {

  // const venue = useSelector(state => {
  //   return state.venue
  // })
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

  // const venueObj = venue[venueId]
  // console.log(venueObj)
  // const coordslat = parseFloat(venueObj.lat)
  // const coordslng = parseFloat(venueObj.lng)
  // console.log(venue)
  // console.log(venue[venue.id])


  // console.log(coordslat)
  // console.log(venue[id].lat)

  const center = {
    lat: venue.lat,
    lng: venue.lng
  }
  const position = {
    lat: venue.lat,
    lng: venue.lng
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