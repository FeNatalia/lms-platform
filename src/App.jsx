// NPM Packages
import { BrowserRouter, Switch } from "react-router-dom";
import { useEffect } from "react";
import { getCollection } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";

export default function App() {
  // Methods
  useEffect( () => {
    getCollection("users").then((result) => {
      console.log(result);
    })
  }, [])

  useEffect( () => {
    getCollection( "courses").then((result) => {
      console.log(result);
    })
  }, [])

  // Global state
  const { isLogged } = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {isLogged? <Logged/> : <Unlogged/>}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
