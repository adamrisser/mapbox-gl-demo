import React, { Component } from 'react';
import ReactMapboxGl, {Layer} from "react-mapbox-gl";
import './styles.css';

let paused = false;

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYXJpc3NlciIsImEiOiJjamZpaWV1aWkwNWxxMnhxODJwOGt5anljIn0.ti4h1mZ0mLM4v95aQwtfcQ"
});

const LOCATIONS = {
  'Colleseum'          : { zoom: 16, bearing: 60,  pitch: 60, center: [12.492373, 41.890251] },
  'Baths of Caracalla' : { zoom: 16, bearing: 60,  pitch: 60, center: [12.492439, 41.879040] },
  'Circus Maximus'     : { zoom: 16, bearing: 60,  pitch: 60, center: [12.485133, 41.886131] },
  'Spanish Steps'      : { zoom: 19, bearing: 60,  pitch: 60, center: [12.482775, 41.905991] },
  'Pantheon'           : { zoom: 17, bearing: -140, pitch: 60, center: [12.476873, 41.898609] },
  'Trevi Fountain'     : { zoom: 19, bearing: 10,  pitch: 60, center: [12.483313, 41.900932] },
  'Roman Forum'        : { zoom: 17, bearing: 60,  pitch: 60, center: [12.485325, 41.892464] }
};

const MenuButton = ({ center, location, handleChangeCenter }) => {
  const className = LOCATIONS[location] === center ? 'location-selected' : 'location';

  return (
    <div
      className={className}
      onClick={handleChangeCenter.bind(this, LOCATIONS[location])}>
      {location}
    </div>
  )
};

const Menu = ({ center, handleChangeCenter }) => (
  <section className="location-menu">
    {Object.keys(LOCATIONS).map((location, key) => (
      <MenuButton
        key={key}
        center={center}
        location={location}
        handleChangeCenter={handleChangeCenter}
      />
    ))}
  </section>
);

export default class MoveToMethod extends Component {
  state = LOCATIONS['Colleseum']

  handleChangeCenter = (location) => {
    paused=true;
    this.setState({ ...location });
  }

  render = () => {
    const { center, zoom, bearing, pitch } = this.state;

    return (
      <section className="wrapper">
        <Map
          style="mapbox://styles/arisser/cjfijaw8z3hd32rr5clkm6xcp"
          center={center}

          onStyleLoad={ (map) => {  
            this.state.interval = setInterval(() => {
              if(!paused)
                map.setBearing(map.getBearing()+0.15);
            }, 10);
          } }

          onMoveEnd = {() => paused = false }

          zoom={[zoom]}
          pitch={[pitch]}
          bearing={[bearing]}
          flyToOptions={{
            curve: 1
          }}

          containerStyle={{height: "100vh", width: "100vw" }}
          options={{
            moveToMethod: 'easeTo',
          }}
        >
          <Layer
            id="3d-buildings"
            sourceId="composite"
            sourceLayer="building"
            filter={['==', 'extrude', 'true']}
            type='fill-extrusion'
            minzoom={15}
            paint={{
              'fill-extrusion-color': '#EEE',
              'fill-extrusion-height': {
                  'type': 'identity',
                  'property': 'height'
              },
              'fill-extrusion-base': {
                  'type': 'identity',
                  'property': 'min_height'
              },
              'fill-extrusion-opacity': .6
            }}  
          />
        </Map>

        <Menu 
          center={center}
          handleChangeCenter={this.handleChangeCenter.bind(this)}
        />
      </section>
    );
  }
}

