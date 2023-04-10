import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "react-bootstrap/esm/ThemeProvider";
import "./index.css";
import App from "./App";

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider
      breakpoints={["xxl", "xl", "lg", "md", "sm"]}
      minBreakpoint="sm"
    >
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
