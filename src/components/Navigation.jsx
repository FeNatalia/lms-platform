import { useHistory } from "react-router"

// Project files
import { useAuth } from "state/AuthProvider";

export default function Navigation(){
    // Global state
    const { isLogged, setUser, setIsLogged } = useAuth();
    const history = useHistory();
    
    // Methods
    function onLogout() {
        localStorage.setItem("uid", "");
        setUser({});
        setIsLogged(false);
        history.push("/login");
    }

    return(
        <>
            {isLogged && 
            <nav>
                <p>My Calendar</p>
                <button onClick={onLogout}>Logout</button>
                <p>Logo</p>
            </nav>}
        </>
    )
}