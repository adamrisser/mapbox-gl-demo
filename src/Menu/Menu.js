import React, { Component } from "react";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const Section = styled.section`
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 70vh;
  padding-top: 25vh;
`;

const Wrapper = styled.section`
  display: block;
  padding: 40px;
`;

const Title = styled.h2`
  display: block;
  font-family: Baskerville;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  display: block;
  font-size: 20px;
  font-family: Neue Haas Grotesk;
  line-height: 30px;
  margin-bottom: 30px;
`;

const MenuButton = ({ center, location, handleChangeCenter, LOCATIONS }) => {
  const className =
    LOCATIONS[location].center === center ? "location-selected" : "location";

  return (
    <div
      className={className}
      onClick={handleChangeCenter.bind(this, LOCATIONS[location])}
    >
      {location}
    </div>
  );
};

export default class Menu extends Component {
  render = () => {
    const { center, handleChangeCenter, LOCATIONS } = this.props;

    return (
      <Wrapper>
        {Object.keys(LOCATIONS).map((location, key) => (
          <Section key={key}>
            <Title>{location}</Title>
            <VisibilitySensor
              onChange={isVisible => {
                if (isVisible) {
                  handleChangeCenter(LOCATIONS[location]);
                }
              }}
            />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Section>
        ))}
      </Wrapper>
    );
  };
}
