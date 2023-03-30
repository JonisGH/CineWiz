import React from "react";

import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import SearchBar from "./components/SearchBarComponent";
import TableComponent from "./components/TableComponent";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#200f21",
          minHeight: "200vh",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <NavbarComponent />
          <SearchBar />
          <div>
            <TableComponent />
          </div>
        </div>
        <div className="bg-animation">
          {/* cool star colors #e4edf5 ,#63e8ff, #faab4b  */}
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </div>
    </>
  );
}

export default App;
