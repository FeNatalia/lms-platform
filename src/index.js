// NPM Packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "./App";
import { AuthProvider } from "state/AuthProvider";
import { ElearningProvider } from "state/ElearningProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ElearningProvider>
        <App />
      </ElearningProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
