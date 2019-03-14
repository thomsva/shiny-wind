
import React, { useEffect } from 'react'
import L from 'leaflet';



const App = () => {
  useEffect(() => {
    // create map
    L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }, []);





  return (
    <div>
      <h1>Hello world</h1>


      <div id="map"></div>
      dd
    </div>


  )
}

export default App;
