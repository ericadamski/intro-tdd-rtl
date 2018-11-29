import React from "react";
import { render } from "react-testing-library";

import Card from "../index";

describe("Card", () => {
  it("should match the snapshot", () => {
    // Arrange
    const title = "Title";
    const description = "Description";
    const img = "/some/path.png";

    // Act
    const { container } = render(
      <Card title={title} description={description} img={img} />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});
