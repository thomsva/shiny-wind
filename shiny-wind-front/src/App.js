
import React, { useEffect } from 'react'
import ReactMapboxGl, { Layer, Feature, Image } from "react-mapbox-gl";




const App = () => {

  const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoidGhvbXN2YSIsImEiOiJjanQ4cHlxbWEwOTRyNDRwYmpzdjQxNGhyIn0.4PU0W2GwrX06FmM5p2frSA"
  });



  return (
    <div>
      <h1>Hello world</h1>


      <Map
        style="mapbox://styles/thomsva/cjt8scvop03tr1gnktqv2q03b"
        center={[25, 60.1]}
        zoom={[13]}
        containerStyle={{

          height: "100vh",
          width: "100vw"
        }}>
        <Layer
          type="symbol"
          layout={{ "icon-image": "windmill-100", "icon-size": 0.5 }}>
          <Feature coordinates={[25, 60.1]} />

        </Layer>
      </Map>

    </div >


  )
}

export default App;
