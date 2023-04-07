import React from 'react';
import './App.css';

import { UserlistProvider, initialUserListState } from './context/appContext';
import NavbarComponent from './components/NavbarComponent';
import TableComponent from './components/TableComponent';

function App() {
  return (
    <UserlistProvider
      favorites={initialUserListState.favorites}
      watchlist={initialUserListState.watchlist}
    >
      <div className="app-wrapper">
        <div style={{ position: 'relative', zIndex: 1 }}>
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
    </UserlistProvider>
  );
}

export default App;
