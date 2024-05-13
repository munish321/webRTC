import React from 'react'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
import GoogleMapReact from 'google-map-react';
function GoogleMaps() {
  let center= {
    lat: 10.99835602,
    lng: 77.01502627
  }
  return (
    <div>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMaps