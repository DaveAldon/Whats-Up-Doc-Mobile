import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

const mockProp = {
  UnitTestLoading: true,
};

describe("<App />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("has 1 child", () => {
    const tree = renderer.create(<App {...mockProp} />).toJSON();
    expect(tree?.type).toEqual("RNCSafeAreaProvider");
  });

  it("renders correctly", () => {
    const tree = renderer.create(<App {...mockProp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
