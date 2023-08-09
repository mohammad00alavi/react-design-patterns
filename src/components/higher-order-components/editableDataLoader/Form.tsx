import editableDataLoader from "./editableDataLoader";

type User = {
    name: string;
    age: number;
    role: string;
};

interface Props {
    user?: User;
    onChangeUser?: (data: { [key: string]: string | number }) => void;
    onSaveUser?: () => void;
    onResetUser?: () => void;
}

const Form = editableDataLoader(
    ({ user, onChangeUser, onSaveUser, onResetUser }: Props) => {
        const { name, age, role } = user || {};
        return user ? (
            <>
                <label>
                    Name:
                    <input
                        value={name}
                        onChange={(e) => {
                            if (onChangeUser) {
                                onChangeUser({ name: e.target.value });
                            }
                        }}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => {
                            if (onChangeUser) {
                                onChangeUser({ age: Number(e.target.value) });
                            }
                        }}
                    />
                </label>
                <label>
                    Role:
                    <input
                        type="text"
                        value={role}
                        onChange={(e) => {
                            if (onChangeUser) {
                                onChangeUser({ role: e.target.value });
                            }
                        }}
                    />
                </label>
                <button onClick={onResetUser}>Reset</button>
                <button onClick={onSaveUser}>Save Changes</button>
            </>
        ) : (
            <p>Loading...</p>
        );
    },
    "https://user-cea32-default-rtdb.europe-west1.firebasedatabase.app/users/111.json"
);

export default Form;
