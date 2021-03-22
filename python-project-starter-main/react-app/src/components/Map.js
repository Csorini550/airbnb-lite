import React, { useCallback } from 'react';
import { Circle, GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';





const Map = ({ lat, lng }) => {


  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCJMuSmneTfi_MCV_-PK-DpQSOA7-aw4uU" // ,
    // ...otherOptions
  })

  const defaultCenter = {
    lat: lat,
    lng: lng
  }

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  }


  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? (<GoogleMap
    // options={options}
    // onLoad={onLoad}
    mapContainerStyle={mapContainerStyle}
    zoom={13}
    center={defaultCenter}
  >

    <Marker position={defaultCenter} />

  </GoogleMap>) : null
}






export default Map;