// NPM package
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// Project files
import FileItem from "components/FileItem";
import { useElearning } from "state/ElearningProvider";
import { getCollection } from "scripts/fireStore";

export default function CoursePage() {
    // Global state
  const { courses, dispatch2 } = useElearning();
  const { courseId } = useParams();

  // Local state
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const course = courses.find((item) => item.id === courseId);
  const path = `courses/${courseId}/files`;

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const files = await getCollection(path);

      setFiles(files);
      dispatch2({ type: "SET_DISHES", payload: files });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, [dispatch2]);

  useEffect(() => fetchData(path), [fetchData, path]);

    // Components
    const Files = files.map((item) => (
    <FileItem key={item.id} item={item} to={`/dish/${item.id}`} />
    ));
    return (
        <div>
            <h1>{course.title}</h1>
            <h2>{course.description}</h2>
            <h3>Course materials</h3>
            {Files}
            <Link to="/">Go back</Link>
        </div>
    )
}