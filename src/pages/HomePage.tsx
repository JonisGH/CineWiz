import React, { useState, ChangeEvent } from "react";
import useDebounce from "../hooks/useDebounce";

import Table from "react-bootstrap/esm/Table";
import Container from "react-bootstrap/esm/Container";

import useFetchData from "../hooks/useFetchData";

import SearchBar from "../components/SearchBarComponent";
import TableRowComponent from "../components/TableRowComponent";

interface Props {}

function HomePage(props: Props): React.ReactElement {
  const [hideSearchDisplay, setHideSearchDisplay] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce<string>(searchQuery, 500);

  const { searchResult } = useFetchData({
    searchString: debouncedValue,
    page: "1",
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    event.preventDefault();

    if (event.target.value !== undefined) {
      setSearchQuery(event?.target?.value);
    }
  }

  return (
    <Container>
      <SearchBar
        searchInput={searchQuery}
        show={hideSearchDisplay}
        setShow={setHideSearchDisplay}
        handleChange={handleChange}
      />
      <Container>
        <Table striped hover variant="dark" style={{ marginTop: "2rem" }}>
          <tbody className="text-align-center tablebody">
            {searchResult.map((movie) => {
              return <TableRowComponent key={movie.id + "row"} movie={movie} />;
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export default HomePage;
