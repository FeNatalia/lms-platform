// NPM Packages
import { useCallback, useEffect, useState } from "react";
import { getDocument } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import Browser from "components/Browser";


export default function App() {
  // Global state
  const { isLogged, setUser, setIsLogged } = useAuth();

  // Local state
  const [status, setStatus] = useState(0);

  // Methods
  const fetchUser = useCallback(
    async (path) => {
      const uid = localStorage.getItem("uid");
      if (uid) {
        const user = await getDocument(path, uid);
        setUser(user);
        setIsLogged(true);
      }
      setStatus(1);
    }, 
    [setUser, setIsLogged]
  );
  useEffect(() => fetchUser("users"), [fetchUser]);

  /*useEffect( () => {
    getCollection("users").then((result) => {
      console.log(result);
    })
  }, [])

  useEffect( () => {
    getCollection( "courses").then((result) => {
      console.log(result);
    })
  }, [])*/

  return (
    <div className="App">
      {status === 0 && <p>Loading</p>}
      {status === 1 && <Browser isLogged={isLogged}/>}
    </div>
  );
}
