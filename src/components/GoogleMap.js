import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '32rem',
  height: '32rem'
};

const centerPosition = {
  lat: 40.6417062,
  lng: -3.7345112
};

const celebrationPlace = {
  lat: 40.5730869,
  lng: -3.7082064
};

const weddingPlace = {
  lat: 40.7027937,
  lng: -3.7697878
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    console.log(map)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const goToIscarGoogleMap = () => {
    const newWindow = window.open(`https://www.google.com/maps/search/?api=1&query=${celebrationPlace['lat']},${celebrationPlace['lng']}`, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = nul
  }

  const goToChurchGoogleMap = () => {
    const newWindow = window.open(`https://www.google.com/maps/search/?api=1&query=${weddingPlace['lat']},${weddingPlace['lng']}`, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = nul
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        centerPosition={centerPosition}
        zoom={10}
        onUnmount={onUnmount}
        
      >
        <Marker
            onLoad={onLoad}
            position={celebrationPlace}
            onClick={() => {goToIscarGoogleMap()}}
            />

        <Marker
            onLoad={onLoad}
            position={weddingPlace}
            onClick={() => {goToChurchGoogleMap()}}
            />
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)