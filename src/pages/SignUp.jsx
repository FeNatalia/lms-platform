// NPM Packages
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

// Project files
import InputField from "components/InputField";
import fields from "data/fields-signup.json";
import { createAccount } from "scripts/authentification";
import { createDocumentWithId } from "scripts/fireStore";
import Logo from "assets/Logo.png";

export default function SignUp() {
  // Global state
  const history = useHistory();

  // Local state
  const [form, setForm] = useState({});
  const [errorMassage, setErrorMessage] = useState("");

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const account = await createAccount(form.email, form.password);

    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = { name: form.name, city: form.city, isTeacher: false };
    await createDocumentWithId("users", uid, newUser);
    alert("Your account is successfully created, please login now");
    history.push("/login");
  }

  function onFailure(message) {
    setErrorMessage(message);
  }
  // Components
  const InputFields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <div id="auth-page">
      <header>
        <h3>Register to OpenEyes</h3>
      </header>
      <div className="auth-page-content">
        <form onSubmit={onSubmit}>
          <div className="logo">
            <img src={Logo} alt="an icon of an eye and a leaf" />
          </div>
          {InputFields}
          <p>{errorMassage}</p>
          <button>Register</button>
          <Link to="/login">Login instead</Link>
          <Link to="/">Go to main</Link>
        </form>
      </div>
    </div>
  );
}
