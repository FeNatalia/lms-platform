// NPM Packages
import { useHistory } from "react-router"

export default function Home() {
    // Global state
    const history = useHistory();
    // Methods
    function onLogout() {
        alert("You are logged out..."); 
        history.push("/login");
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}