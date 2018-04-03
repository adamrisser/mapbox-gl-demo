import React, { Component } from "react";
import LOCATIONS from "../data";
import Map from "../Map/Map";
import Menu from "../Menu/Menu";
import styled from "styled-components";
import "./styles.css";

let paused = false;

const App = styled.section`
  display: flex;
  justify-content: space-between;
`;

const FixedHalf = styled.section`
  position: fixed;
  top: 0;
  left: 0;
`;

const Half = styled.section`
  width: 50%;
  margin-left: auto;
`;

export default class MoveToMethod extends Component {
  state = LOCATIONS["Colosseum"];

  handleChangeCenter = location => {
    paused = true;
    this.setState({ ...location });
  };

  render = () => {
    const { center, zoom, bearing, pitch } = this.state;

    const onStyleLoad = map => {
      setInterval(() => {
        if (!paused) map.setBearing(map.getBearing() + 0.15);
      }, 10);
    };

    const onMoveEnd = () => (paused = false);

    return (
      <App>
        <FixedHalf>
          <Map
            {...this.state}
            onMoveEnd={onMoveEnd}
            onStyleLoad={onStyleLoad}
          />
        </FixedHalf>
        <Half>
          <Menu
            center={center}
            handleChangeCenter={this.handleChangeCenter.bind(this)}
            LOCATIONS={LOCATIONS}
          />
        </Half>
      </App>
    );
  };
}
