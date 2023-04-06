import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import fs from "fs";
import path from "path";

import App from "../App";

const html = fs.readFileSync(
  path.resolve(__dirname, "../public/index.html"),
  "utf8"
);

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
  });

  it('opens offcanvas when "My Stuff" button is clicked', () => {
    const { container } = render(
      <div dangerouslySetInnerHTML={{ __html: html }} />
    );
    const myStuffButton = screen.getByRole("button", { name: "My Stuff" });
    fireEvent.click(myStuffButton);
    const offCanvasElement = screen.getByTestId("offcanvas");
    expect(offCanvasElement).toBeInTheDocument();
  });
});
