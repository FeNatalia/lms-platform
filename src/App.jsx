// NPM Packages
import { BrowserRouter, Switch } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getCollection, getDocument } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";

export default function App() {
  // Global state
  const { isLogged, auth, setUser, setIsLogged } = useAuth();

  // Local state
  const [status, setStatus] = useState(0);

  // Methods
  const fetchUser = useCallback(
    async (path, auth) => {
      try {
        const user = await getDocument(path, auth);
        setUser(user);
        setIsLogged(true);
        setStatus(1);
      } catch (error) {
        console.log("Error loading profile", error);
        setStatus(2);
      }
    }, 
    [setUser, setIsLogged]
  );

  useEffect(() => {
    if (auth !== "") fetchUser("users", auth);
  }, [fetchUser, auth]);

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

  // Components
  const Browser = (
    <BrowserRouter>
    <Switch>
      {isLogged? <Logged/> : <Unlogged/>}
    </Switch>
  </BrowserRouter>
  );
  return (
    <div className="App">
      @{auth}@
      {status === 0 && <p>Loading</p>}
      {status === 1 && Browser}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
