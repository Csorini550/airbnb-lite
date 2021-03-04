import React, { useCallback } from 'react';
import { Circle, GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';





const Map = ({ address, city, state }) => {
  let geocoded;
  let oneLineAddress = `${address} ${city} ${state}`;

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCJMuSmneTfi_MCV_-PK-DpQSOA7-aw4uU" // ,
    // ...otherOptions
  })


  const mapContainerStyle = {
    width: "100%",
    height: "200px",
  }

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    const onLoad = useCallback(
      function onLoad(mapInstance) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': oneLineAddress }, function (results, status) {
          if (status == 'OK') {
            geocoded = results[0].geometry.location;

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        })
      }
    )
    return <GoogleMap
      // options={options}
      onLoad={onLoad}
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={geocoded}
    >

      <Marker position={geocoded} />

    </GoogleMap>
  }


  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : null
}




// const defaultCenter = {
//   lat: 37.772,
//   lng: -122.214
// }

// const defaultPosition = {
//   lat: 37.772,
//   lng: -122.214
// }


export default Map;