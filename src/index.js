// NPM Packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "./App";
import { AuthProvider } from "state/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
