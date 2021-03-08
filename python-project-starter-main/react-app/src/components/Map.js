import React, { useCallback } from 'react';
import { Circle, GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';





const Map = ({ lat, lng }) => {


  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCJMuSmneTfi_MCV_-PK-DpQSOA7-aw4uU" // ,
    // ...otherOptions
  })


  const mapContainerStyle = {
    width: "100%",
    height: "200px",
  }

  return <GoogleMap
    // options={options}
    // onLoad={onLoad}
    mapContainerStyle={mapContainerStyle}
    zoom={13}
    center={geocoded}
  >

    <Marker position={geocoded} />

  </GoogleMap>
}


// if (loadError) {
//   return <div>Map cannot be loaded right now, sorry.</div>
// }

// return isLoaded ? renderMap() : null
// }




// const defaultCenter = {
//   lat: 37.772,
//   lng: -122.214
// }

// const defaultPosition = {
//   lat: 37.772,
//   lng: -122.214
// }


export default Map;