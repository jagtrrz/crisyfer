import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 40.6417062,
    lng: -3.7345112,
  },
  weddingPlace: {
    lat: 40.7027937,
    lng: -3.7697878
  },
  celebrationPlace: {
    lat: 40.5730869,
    lng: -3.7082064
  },
  zoom: 10,
}
const goWeddingMap = () => {
  const newWindow = window.open(
    `https://www.google.com/maps/search/?api=1&query=${defaultProps.weddingPlace.lat},${defaultProps.weddingPlace.lng}`, 
    '_blank', 'noopener,noreferrer'
  )
  if (newWindow) newWindow.opener = nul
}

const goCelebrationMap = () => {
  const newWindow = window.open(`
    https://www.google.com/maps/search/?api=1&query=${defaultProps.celebrationPlace.lat},${defaultProps.celebrationPlace.lng}`, 
    '_blank', 'noopener,noreferrer'
  )
  if (newWindow) newWindow.opener = nul
}

const WeddingPlace = ({ text }) => <div  
  onClick={() => {goWeddingMap()}}>
    {text}
  </div>
const CelebrationPlace = ({ text }) => <div 
  onClick={() => {goCelebrationMap()}}>
    {text}
  </div>

const GoogleMap = () => (
  <div style={{ height: '32rem', width: '32rem' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    > 
      <WeddingPlace
        lat={defaultProps.weddingPlace.lat}
        lng={defaultProps.weddingPlace.lng}
        text={'Iglesia'}
      />
      <CelebrationPlace
        lat={defaultProps.celebrationPlace.lat}
        lng={defaultProps.celebrationPlace.lng}
        text={'Finca'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap