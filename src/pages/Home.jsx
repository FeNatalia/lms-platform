// NPM Packages
import CourseItem from "components/CourseItem";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCollection } from "scripts/fireStore";

// Project files
import { useAuth } from "state/AuthProvider";
import { useElearning } from "state/ElearningProvider";

export default function Home() {
    // Global state
    const { user } = useAuth();
    const { courses } = useElearning();
    const { dispatch } = useElearning();

    // Local state
    const path = "courses";

    /*useEffect( () => {
        getCollection( "courses").then((result) => {
            console.log(result);
        })
    }, [])*/

    // Methods 
    const fetchData = useCallback(async (path) => {
        const courses = await getCollection(path);
        dispatch({ type: "SET_CATEGORIES", payload: courses });
    }, [dispatch]);
    
    useEffect(() => fetchData(path), [fetchData]);

    // Components
    const CourseItems = courses.map((item) => (
    <Link key={item.id} to={`/courses/${item.id}`}>
      <CourseItem item={item} />
    </Link>
    ));

    return (
        <div id="home-page">
            <header>
                {user.isTeacher? <h3>My teaching</h3> : <h3>My learning</h3>}
            </header>
            <div className="home-page-content">
                <p>You logged in as {user.name}</p>
                <h2>My courses</h2>
                <div className="courses">
                    {CourseItems}
                </div>
                {user.isTeacher && <button>Add course</button>}
            </div>
        </div>
    )
}