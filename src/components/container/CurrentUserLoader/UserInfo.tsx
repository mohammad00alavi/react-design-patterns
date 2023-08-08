import React from "react";
import { User } from "./utils";

const UserInfo: React.FC<User> = (props = {}) => {
    const { name, age, hobbies } = props || {};

    return props ? (
        <>
            <h3>Name: {name}</h3>
            <p>Age: {age} years</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies?.map((hobby) => (
                    <li key={hobby}>{hobby}</li>
                ))}
            </ul>
        </>
    ) : (
        <p>Loading ...</p>
    );
};

export default UserInfo;
