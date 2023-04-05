import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

import Table from "react-bootstrap/Table";

import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBarComponent";
import useFetchData from "../hooks/useFetchData";
import TableRowComponent from "./TableRowComponent";

type Props = {};

const TableComponent = (props: Props) => {
  const [hideSearchDisplay, setHideSearchDisplay] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce<string>(searchQuery, 500);

  const { searchResult, loading, error } = useFetchData({
    searchString: debouncedValue,
    page: "1",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    event.preventDefault();

    if (event.target.value !== undefined) {
      setSearchQuery(event?.target?.value);
    }
  }

  return (
    <>
      <SearchBar
        searchInput={searchQuery}
        show={hideSearchDisplay}
        setShow={setHideSearchDisplay}
        handleChange={handleChange}
      />
      <Container>
        <Table striped hover variant="dark" style={{ marginTop: "2rem" }}>
          <tbody className="text-align-center">
            {searchResult.map((movie) => {
              return <TableRowComponent key={movie.id + "row"} movie={movie} />;
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableComponent;
