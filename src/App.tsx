import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";

import { UserlistProvider, initialUserListState } from "./context/appContext";
import NavbarComponent from "./components/NavbarComponent";
import Details from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <UserlistProvider
      favorites={initialUserListState.favorites}
      watchlist={initialUserListState.watchlist}
    >
      <div className="app-wrapper">
        <div style={{ position: "relative", zIndex: 1 }}>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="details" element={<Details />} />
          </Routes>
        </div>
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
          <div id="stars5"></div>
        </div>
      </div>
    </UserlistProvider>
  );
}

export default App;
