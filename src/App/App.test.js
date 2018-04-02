import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import renderer from "react-test-renderer";
import "jest-styled-components";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders welcome message", () => {
  const wrapper = shallow(<App />);

  const welcomeMessage = "Welcome to Shift Lab's React Starter";

  expect(wrapper.contains(welcomeMessage)).toEqual(true);
});
