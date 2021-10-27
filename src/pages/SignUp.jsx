// Project files
import { useState } from "react";
import InputField from "../components/InputField";
import fields from "../data/fields-signup.json";

export default function SignUp() {
    // Local state
    const [user, setUser] = useState({ name: "", email: "", password: ""});

    // Methods
    function onChange(key, value) {
        const field = { [key] : value };
        setUser({ ...user, ...field});
    }

    function onSubmit(event) {
        event.preventDefault();
        alert("On submit...");
    }

    // Components
    const InputFields = fields.map((item) => (
        <InputField key={item.key} options={item} state={user[item.key]} onChange={onChange} />
    ));

    return (
        <div>
            <h1>Create an account</h1>
            <form onSubmit={onSubmit}>
                {InputFields}
                <div>
                    <button>Create account</button>
                </div>
            </form>
        </div>
    )
}