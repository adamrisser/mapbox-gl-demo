import React, { Component } from "react";
import ReactDOM from "react-dom";
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
  text-align: center;
`;

const LOGO = styled.div`
  position: fixed;
  top: 0;
  background: #f7f7f8 url("logo.png") center center no-repeat;
  width: 50%;
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

window.onbeforeunload = () => window.scrollTo(0, 0);

export default class MoveToMethod extends Component {
  state = LOCATIONS["Colosseum"];

  handleChangeCenter = location => {
    paused = true;
    this.setState({
      ...location,
      currentLocation: location.name
    });
  };

  render = () => {
    const onStyleLoad = map => {
      map.scrollZoom.disable();
      map.dragPan.disable();

      paused = false;

      setInterval(() => {
        if (!paused) map.setBearing(map.getBearing() + 0.025);
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
          <LOGO src="/logo.png" />

          <Menu
            handleChangeCenter={this.handleChangeCenter.bind(this)}
            LOCATIONS={LOCATIONS}
          />
        </Half>
      </App>
    );
  };
}
