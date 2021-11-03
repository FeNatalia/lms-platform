// NPM packages
import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

// Project files
import Information from "components/Information";
import { useElearning } from "state/ElearningProvider";
import { createDocument, updateDocument } from "scripts/fireStore";

export default function EditPage() {
  // Global state
  const { id } = useParams();
  const { courses, dispatch } = useElearning();
  const history = useHistory();

  // Local state
  const [profile, setProfile] = useState(findProfile(courses, id));

  // Methods
  function findProfile(courses, id) {
    const existingProfile = courses.find((item) => item.id === id);
    const newProfile = { title: "", description: "", imageURL: "" };

    return existingProfile === undefined ? newProfile : existingProfile;
  }

  function onSave(profile) {
    id === "new-profile" ? onCreateProfile(profile) : onUpdateProfile(profile);
    history.push("/");
  }

  function onChange(key, value) {
    const field = { [key]: value };

    setProfile({ ...profile, ...field });
  }

  async function onCreateProfile(profile) {
    profile.id = await createDocument("courses", profile);
    dispatch({ type: "CREATE_PROFILE", payload: profile });
  }

  async function onUpdateProfile(profile) {
    await updateDocument("courses", profile);
    dispatch({ type: "UPDATE_PROFILE", payload: profile });
  }

  return (
    <div className="edit-page">
      <header>
        <h1>Edit page</h1>
      </header>
      <section>
        <Information profile={profile} onChange={onChange} />
        <div className="button-save">
          <button onClick={() => onSave(profile)} className="button-save">
            Save
          </button>
        </div>
        <div className="link-go-back">
          <Link to="/" id="button-add">
            Go back
          </Link>
        </div>
      </section>
    </div>
  );
}
