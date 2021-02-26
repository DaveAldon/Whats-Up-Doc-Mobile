import React from "react";
import renderer from "react-test-renderer";
import { RenderInner, RenderHeader } from "../../components/Provider";

describe("Provider <RenderInner />", () => {
  const mockProvider = {
    colors: "colors",
    practitioner: "practitioner",
    providerData: {
      identifier: ["value"],
      telecom: ["value", "value"],
    },
  };
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("has children", () => {
    const tree = renderer.create(<RenderInner {...mockProvider} />).toJSON();
    expect(tree?.children.length).toBeGreaterThan(0);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<RenderInner {...mockProvider} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Provider <RenderHeader />", () => {
  const mockColor = "colors";
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("has children", () => {
    const tree = renderer.create(<RenderHeader {...mockColor} />).toJSON();
    expect(tree?.children.length).toBeGreaterThan(0);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<RenderHeader {...mockColor} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
