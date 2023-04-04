import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

import Table from "react-bootstrap/Table";

import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBarComponent";
import useFetchData from "../hooks/useFetchData";
import TableRowComponent from "./TableRowComponent";

type Props = {};

const TableComponent = (props: Props) => {
  const [hideSearchDisplay, setHideSearchDisplay] = useState(true);
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

  console.log(searchResult);

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        hideSearchDisplay={hideSearchDisplay}
        handleChange={handleChange}
      />
      <Container>
        <Table striped hover variant="dark" style={{ marginTop: "2rem" }}>
          <tbody className="text-align-center">
            {/* Mapping table here */}
            {searchResult.map((movie) => {
              return <TableRowComponent movie={movie} />;
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableComponent;
