import { useHistory } from "react-router"

// Project files
import { useAuth } from "state/AuthProvider";
import Logo from "assets/Logo.png";

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
            <nav className="navigation">
                <a href="https://calendar.google.com/" target="_blank" rel="noreferrer">My Calendar</a>
                <button onClick={onLogout}>Logout</button>
                <img src={Logo} alt="an icon of an eye and a leaf"/>
            </nav>}
        </>
    )
}