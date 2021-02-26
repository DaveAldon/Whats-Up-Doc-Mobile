import React from "react";
import renderer from "react-test-renderer";
import Listing from "../../screens/Listing";

const mockProp = {
  navigation: {
    setOptions: jest.fn(),
  },
  route: { params: jest.fn() },
  response: jest.fn(),
  error: jest.fn(),
};

jest.mock("react-query", () => {});
jest.mock("react-native-gesture-handler", () => {});

describe("<Listing />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("has children", () => {
    const tree = renderer.create(<Listing {...mockProp} />).toJSON();
    expect(tree?.children.length).toBeGreaterThan(0);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Listing {...mockProp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
