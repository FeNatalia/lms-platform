// NPM Packages
import { BrowserRouter, Switch } from "react-router-dom";

// Project files
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import Navigation from "./Navigation";

export default function Browser({ isLogged }) {
  // Global state
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>{isLogged ? <Logged /> : <Unlogged />}</Switch>
    </BrowserRouter>
  );
}
