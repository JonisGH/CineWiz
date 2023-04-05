import { render, screen } from "@testing-library/react";
import { MovieObject } from "../context/appContext";
import TableComponent from "./TableComponent";

const mockMovie: MovieObject = {
  title: "The Mockening",
  release_date: "2020-20-20",
  poster_path: "/mockURL",
  id: 1234,
  vote_average: 4.2,
  overview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum, quisquam quae accusamus dolore eius. Repellendus laudantium sit amet beatae?",
};

test("renders", () => {
  render(<TableComponent></TableComponent>);
});
