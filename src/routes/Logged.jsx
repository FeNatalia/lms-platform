// NPM Packages
import { Route } from "react-router-dom";

// Project files
import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import CoursePage from "pages/CoursePage";
import FilePage from "pages/FilePage";
import EditPage from "pages/EditPage";

export default function Logged() {
    return(
        <>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={CoursePage} path="/courses/:courseId" />
        <Route component={FilePage} path="/file/:fileId" />
        <Route component={EditPage} path="/edit/:id" />
        </>
    )
}