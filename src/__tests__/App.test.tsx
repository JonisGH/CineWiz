import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

//Components used in tests
import App from "../App";
import Table from "react-bootstrap/Table";
import TableRowComponent from "../components/TableRowComponent";
import NavbarComponent from "../components/NavbarComponent";
// Types used in tests
import { MovieObject } from "../context/appContext";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), 
    removeListener: jest.fn(), 
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const mockMovie: MovieObject = {
  title: "The Mockening Movie",
  release_date: "2020-20-20",
  poster_path: "/mockURLmOcKuRl",
  vote_average: 5.5,
  id: 1337,
  overview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus ducimus nobis fugiat accusamus voluptatem doloribus, voluptatum eum? Esse, molestias?",
};

const mockResult = [mockMovie, mockMovie, mockMovie, mockMovie];

describe("App", () => {
  it("renders without crashing", () => {
    expect(render(<App />)).toBeTruthy();
  });
});

test("able to open sidebar onclick", () => {
  render(<NavbarComponent />);

  //click button
  fireEvent.click(screen.getByRole("button"));
  //expect sidebar to appear
  expect(screen.getByRole("dialog")).toBeTruthy();
});

test("tablerowcomponents maps to table and renders movies", () => {
  render(
    <Table>
      <tbody>
        {mockResult.map((movie, idx) => {
          return <TableRowComponent key={idx} movie={movie} />;
        })}
      </tbody>
    </Table>
  );
  expect(screen.getAllByText("The Mockening Movie")).toHaveLength(4);
});
