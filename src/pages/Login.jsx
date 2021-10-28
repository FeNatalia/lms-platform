// NPM Packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
import InputField  from "../components/InputField";
import fields from "../data/fields-login.json";
import { signIn } from "scripts/authentification";
import { getDocument } from "scripts/fireStore";

export default function Login() {
    // Local state
    const [form, setForm] = useState({});
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
        const user = await getDocument("users", uid)
        console.log("Login.jsx onSuccess() user", user);
    }

    function onFailure(message){
        setErrorMessage(message);
    }

    // Components
    const InputFields = fields.map((item) => (
        <InputField key={item.key} options={item} state={form[item.key]} onChange={onChange} />
    ));

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                {InputFields}
                <p>{errorMassage}</p>
                <div>
                    <button>Login</button>
                </div>
            </form>
            <Link to="/signup">Create an account now</Link>
        </div>
    )
}