import { PersonProps } from "../types";

const SmallPersonListItem = ({ person }: PersonProps) => {
    const { name, age } = person;
    return (
        <p>
            Name: {name}, age: {age}
        </p>
    );
};

export default SmallPersonListItem;
