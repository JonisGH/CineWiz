import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";

import "./App.css";
import SearchBar from "./components/SearchBarComponent";
import TableComponent from "./components/TableComponent";

function App() {
  return (
    <>
      <body style={{ backgroundColor: "#200f21" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <NavbarComponent />
          <SearchBar />
          <div>
            <TableComponent />
          </div>
        </div>
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </body>
    </>
  );
}

export default App;
