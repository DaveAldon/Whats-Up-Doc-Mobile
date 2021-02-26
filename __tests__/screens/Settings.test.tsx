import React from "react";
import renderer from "react-test-renderer";
import Settings from "../../screens/Settings";

describe("<Settings />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("has children", () => {
    const tree = renderer.create(<Settings />).toJSON();
    expect(tree?.children.length).toBeGreaterThan(0);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Settings />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
