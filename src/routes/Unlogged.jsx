// NPM Packages
import { Route } from "react-router-dom";

// Project files
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import LandingPage from "pages/LandingPage";

export default function Unlogged(){
    return (
        <>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        </>
    )
}