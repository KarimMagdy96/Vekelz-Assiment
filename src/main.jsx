import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
BrowserRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
