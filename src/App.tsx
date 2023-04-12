import React from "react";

import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";

import { UserlistProvider, initialUserListState } from "./context/appContext";

import NavbarComponent from "./components/NavbarComponent";
import Details from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ErrorBoundary fallback={<div>heheheh</div>}>
      <UserlistProvider
        favorites={initialUserListState.favorites}
        watchlist={initialUserListState.watchlist}
      >
        <>
          <NavbarComponent />
          <Routes>
            <Route path={"/home/"} element={<HomePage />} />
            <Route path={"/home/details"} element={<Details />} />
          </Routes>
        </>
      </UserlistProvider>
    </ErrorBoundary>
  );
}

export default App;
