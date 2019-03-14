
import React from 'react'
import GoogleMapReact from 'google-map-react'



const AnyReactComponent = ({ text }) => <div>{text}</div>

const App = () => {
  const center = {
    lat: 61,
    lng: 25
  }
  const zoom = 7

  return (
    <div>
      <h1>Hello world</h1>


      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'secret' }}
          defaultCenter={center}
          defaultZoom={zoom}

        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>


  )
}

export default App;
