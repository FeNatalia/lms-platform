// NPM Packages
import { BrowserRouter, Switch } from "react-router-dom";

// Project files
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";

export default function Browser({ isLogged }) {
    // Global state
    return (
        <BrowserRouter>
            <Switch>
                {isLogged? <Logged/> : <Unlogged/>}
            </Switch>
        </BrowserRouter>
    );
} 