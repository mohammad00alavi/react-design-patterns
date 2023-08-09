import dataLoader from "./dataLoader";

type User = {
    name: string;
    age: number;
    role: string;
};
interface Props {
    user?: User;
}

const User: React.FC<Props> = ({ user }) => {
    return user ? (
        <>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.role}</p>
        </>
    ) : null;
};

const DataWrapper = dataLoader(
    User,
    "https://user-cea32-default-rtdb.europe-west1.firebasedatabase.app/users/111.json"
);

const DataLoaderDemo = () => {
    return <DataWrapper />;
};

export default DataLoaderDemo;
