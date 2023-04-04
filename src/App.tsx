import React from "react";

import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import TableComponent from "./components/TableComponent";

function App() {
  return (
    <div className="app-wrapper">
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavbarComponent />
        <TableComponent />
      </div>
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        <div id="stars5"></div>
      </div>
    </div>
  );
}

export default App;
