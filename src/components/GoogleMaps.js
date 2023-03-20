import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 40.6417062,
    lng: -3.7345112,
  },
  zoom: 10,
}
const goMap = (lat, lng) => {
  const newWindow = window.open(
    `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, 
    '_blank', 'noopener,noreferrer'
  )
  if (newWindow) newWindow.opener = nul
}

const renderMarkers = (map, maps) => {
  const points = [
    {
      lat: 40.7027937,
      lng: -3.7697878,
      title: 'Iglesia'
    },
    {
      lat: 40.5730869,
      lng: -3.7082064,
      title: 'Finca'
    },
  ]
  const markers = []
  for(let i = 0; i < points.length; i++){
    let marker = new maps.Marker({
      position: { lat: points[i].lat, lng: points[i].lng },
      map,
      title: points[i].title,
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        goMap(points[i].lat, points[i].lng)
      }
    })(marker, i));

    markers.push(marker)
  }
  
  return markers;
 };

const GoogleMap = () => (
  <div style={{ height: '32rem', width: '32rem' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    > 
    </GoogleMapReact>
  </div>
)

export default GoogleMap