// NPM Packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import InputField  from "../components/InputField";
import fields from "../data/fields-login.json";
import { signIn } from "scripts/authentification";
import InputCheckbox from "components/InputCheckbox";
import { getDocument } from "scripts/fireStore";
import { useAuth } from "state/AuthProvider";
import Logo from "assets/Logo.png";

export default function Login() {
    // Global state
    const { setUser, setIsLogged } = useAuth();
    const history = useHistory();

    // Local state
    const [form, setForm] = useState({});
    const [remember, setRemember] = useState(false);
    const [errorMassage, setErrorMessage] = useState("");

    // Methods
    function onChange(key, value) {
        const field = { [key]: value };
        setForm({...form, ...field});
    }

    async function onSubmit(event) {
        event.preventDefault();
        setErrorMessage("");
        const account = await signIn(form.email, form.password);
        account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
    }

    async function onSuccess(uid){
        const document = await getDocument("users", uid)
        setUser(document);
        setIsLogged(true);
        if (remember) localStorage.setItem("uid", uid);
        history.push("/");
    }

    function onFailure(message){
        setErrorMessage(message);
    }

    // Components
    const InputFields = fields.map((item) => (
        <InputField key={item.key} options={item} state={form[item.key]} onChange={onChange} />
    ));

    return (
        <div id="auth-page">
            <header>
                <h3>Login to OpenEyes</h3>
            </header>
            <div className="auth-page-content">
                <form onSubmit={onSubmit}>
                    <div className="logo">
                        <img src={Logo} alt="an icon of an eye and a leaf"/>
                    </div>
                    {InputFields}
                    <p>{errorMassage}</p>
                    <InputCheckbox state={[remember, setRemember]}>
                        Remember me
                    </InputCheckbox>
                    <button>Login</button>
                    <Link to="/signup">Registration</Link>
                    <Link to="/">Go to main</Link>
                </form>
            </div>
        </div>
    )
}