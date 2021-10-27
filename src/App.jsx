// NPM Packages
import { BrowserRouter, Switch } from "react-router-dom";
import { app } from "scripts/firebase"; 
import { getFirestore } from "firebase/firestore/lite";
import { useEffect } from "react";
import { getCollection } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";

export default function App() {
  // Properties
  const database = getFirestore(app)

  // Methods
  useEffect( () => {
    getCollection(database, "users").then((result) => {
      console.log(result);
    })
  }, [database])

  useEffect( () => {
    getCollection(database, "courses").then((result) => {
      console.log(result);
    })
  }, [database])

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
