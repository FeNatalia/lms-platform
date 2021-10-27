// NPM Packages
import { Route } from "react-router-dom";

// Project files
import Login from "pages/Login";
import SignUp from "pages/SignUp";

export default function Unlogged(){
    return (
        <>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        </>
    )
}