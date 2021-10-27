// NPM Packages
import { BrowserRouter, Route } from "react-router-dom";
import { app } from "./scripts/firebase"; 
import { getFirestore } from "firebase/firestore/lite";
import { useEffect } from "react";
import { getCollection } from "./scripts/fireStore";

// Project files
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  // Properties
  const database = getFirestore(app)

  // Methods
  useEffect( () => {
    getCollection(database, "students").then((result) => {
      console.log(result);
    })
  }, [database])

  useEffect( () => {
    getCollection(database, "courses").then((result) => {
      console.log(result);
    })
  }, [database])

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </BrowserRouter>
    </div>
  );
}
