import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home/",
        element: <HomePage />,
        children: [
          {
            path: "/home/details",
            element: <DetailsPage />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RouterProvider router={router} fallbackElement={<div>ooops</div>} />
);
