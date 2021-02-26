import React from "react";
import renderer from "react-test-renderer";
import EditScreenInfo from "../../components/EditScreenInfo";

describe("<EditScreenInfo />", () => {
  const mock = { path: "path" };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("has children", () => {
    const tree = renderer.create(<EditScreenInfo {...mock} />).toJSON();
    expect(tree?.children.length).toBeGreaterThan(0);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<EditScreenInfo {...mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
