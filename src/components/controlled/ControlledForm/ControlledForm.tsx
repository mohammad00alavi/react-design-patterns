import { FormEvent, useEffect, useState } from "react";

const ControlledForm = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        if (!firstName) {
            setError("Please fill your first name");
        } else if (!lastName) {
            setError("Please fill your last name");
        } else if (!age) {
            setError("Please fill your age");
        } else {
            setError("");
        }
    }, [firstName, lastName, age]);

    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        setMessage(`You are ${firstName} ${lastName} with ${age} years old.`);
    };

    return (
        <>
            {error && <p>{error}</p>}
            <form onSubmit={onSubmitHandler} className="flex gap-1">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border"
                    required
                />
                <input
                    type="number"
                    name="yearsOfExperience"
                    placeholder="Years of experience"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="border"
                    required
                />
                <button>Send</button>
            </form>
            {message && <p>{message}</p>}
        </>
    );
};

export default ControlledForm;
