import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div>
            <h1>OpenEyes e-learning</h1>
            <h2>Landing page</h2>
            <Link to="/login">Start Now</Link>
        </div>
    )
}