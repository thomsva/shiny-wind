
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
        style="mapbox://styles/mapbox/streets-v9"
        center={[25, 60.1]}
        zoom={[9]}
        containerStyle={{

          height: "100vh",
          width: "100vw"
        }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[25, 60.1]} />
          <Image id={'iid11'} url={'../ public / photovoltaic.png'}
            coordinates={[24, 60.1]} />
        </Layer>
      </Map>

    </div >


  )
}

export default App;
