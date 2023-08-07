import { PersonProps } from "../types";

const LargePersonListItem = ({ person }: PersonProps) => {
    const { name, age, hairColor, hobbies } = person;

    return (
        <>
            <h3>Name: {name}</h3>
            <p>Age: {age} years</p>
            <p>Hair color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map((hobby) => (
                    <li key={hobby}>{hobby}</li>
                ))}
            </ul>
        </>
    );
};

export default LargePersonListItem;
