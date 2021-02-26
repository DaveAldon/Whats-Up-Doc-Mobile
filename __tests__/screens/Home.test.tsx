import React from "react";
import renderer from "react-test-renderer";
import Home from "../../screens/Home";

const mockProp = {
  navigation: {
    setOptions: jest.fn(),
  },
};

jest.mock("react-native-gesture-handler", () => {});

describe("<Home />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("has children", () => {
    const tree = renderer.create(<Home {...mockProp} />).toJSON();
    expect(tree?.children.length).toBeGreaterThan(0);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Home {...mockProp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
