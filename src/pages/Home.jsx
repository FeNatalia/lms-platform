// NPM Packages
//import { signOut } from "firebase/auth";
import { useHistory } from "react-router"
//import { authInstance } from "scripts/firebase";

// Project files
import { useAuth } from "state/AuthProvider";

export default function Home() {
    // Global state
    const { user, setUser, setIsLogged } = useAuth();
    const history = useHistory();
    // Methods
    function onLogout() {
        localStorage.setItem("uid", "");
        setUser({});
        setIsLogged(false);
        history.push("/login");

        /*signOut(authInstance).then(() => {
            alert("You are logged out")
            setIsLogged(false);
        }).catch((error) => {
            console.error("error", error);
        });*/
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to OpenEyes E-learning, {user.name}</p>
            {user.isTeacher? <p>you are the teacher</p> : <p>you are the student</p>}
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}