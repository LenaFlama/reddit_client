import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./routes", () => () => <div>Mocked Routes</div>);

describe("App Component", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Mocked Routes")).toBeInTheDocument();
  });
});
