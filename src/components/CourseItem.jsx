// NPM Package
import { Link } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";

export default function CourseItem({ item, to }) {
  const { description, title, imageURL } = item;
  const { user } = useAuth();

  return (
    <section className="course-item">
      <img id="course-image" src={imageURL} alt="Category thumbnail" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {user.isTeacher && (
          <div id="edit-link">
            <Link className="button-details" to={to}>
              Edit course
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}