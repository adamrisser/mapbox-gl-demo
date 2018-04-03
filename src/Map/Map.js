import React, { Component } from "react";
import ReactMapboxGl, { Layer } from "react-mapbox-gl";

const RMap = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYXJpc3NlciIsImEiOiJjamZpaWV1aWkwNWxxMnhxODJwOGt5anljIn0.ti4h1mZ0mLM4v95aQwtfcQ"
});

export default class Map extends Component {
  render = () => {
    const { center, bearing, zoom, pitch, onMoveEnd, onStyleLoad } = this.props;

    return (
      <RMap
        style="mapbox://styles/arisser/cjfijaw8z3hd32rr5clkm6xcp"
        // style='mapbox://styles/mapbox/satellite-v9'
        center={center}
        onMoveEnd={onMoveEnd}
        onStyleLoad={onStyleLoad}
        zoom={[zoom]}
        pitch={[pitch]}
        bearing={[bearing]}
        flyToOptions={{ curve: 1, speed: 0.5 }}
        containerStyle={{ height: "100vh", width: "50vw" }}
        movingMethod="flyTo"
        interactive={false}
      >
        <Layer
          id="3d-buildings"
          sourceId="composite"
          sourceLayer="building"
          filter={["==", "extrude", "true"]}
          type="fill-extrusion"
          minzoom={15}
          paint={{
            "fill-extrusion-color": "#EEE",
            "fill-extrusion-height": {
              type: "identity",
              property: "height"
            },
            "fill-extrusion-base": {
              type: "identity",
              property: "min_height"
            },
            "fill-extrusion-opacity": 0.6
          }}
        />
      </RMap>
    );
  };
}
