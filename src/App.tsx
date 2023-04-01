import React from "react";

import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import TableComponent from "./components/TableComponent";

function App() {
  return (
    <>
      {/* <AppContext.Provider> */}

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
      </div>
      {/* </AppContext.Provider> */}
    </>
  );
}

export default App;
