// NPM Packages
import { Route } from "react-router-dom";

// Project files
import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from "pages/SignUp";

export default function Logged() {
    return(
        <>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        </>
    )
}