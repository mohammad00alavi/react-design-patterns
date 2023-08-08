import { FormEvent, createRef, useState } from "react";

const UncontrolledForm = () => {
    const [message, setMessage] = useState("");
    const firstNameRef = createRef<HTMLInputElement>();
    const lastNameRef = createRef<HTMLInputElement>();
    const ageeRef = createRef<HTMLInputElement>();

    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        setMessage(
            `You are ${firstNameRef.current?.value} ${lastNameRef.current?.value} with ${ageeRef.current?.value} years old.`
        );
    };

    return (
        <>
            <form onSubmit={onSubmitHandler} className="flex gap-1">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    ref={firstNameRef}
                    className="border"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    ref={lastNameRef}
                    className="border"
                    required
                />
                <input
                    type="number"
                    name="yearsOfExperience"
                    placeholder="Years of experience"
                    ref={ageeRef}
                    className="border"
                    required
                />
                <button>Send</button>
            </form>
            <p>{message || "Please fill the form"}</p>
        </>
    );
};

export default UncontrolledForm;
