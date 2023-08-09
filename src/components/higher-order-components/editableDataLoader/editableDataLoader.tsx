import axios from "axios";
import { ComponentType, useEffect, useState } from "react";

type User = {
    name: string;
    age: number;
    role: string;
};

const editableDataLoader = <P extends object>(
    Component: ComponentType<P>,
    Url: string
) => {
    return (props: P) => {
        const [data, setData] = useState<User | null>(null);
        const [originalData, setOriginalData] = useState<User | null>(null);
        useEffect(() => {
            (async () => {
                const response = await axios.get(Url);
                setData(response.data.data);
                setOriginalData(response.data.data);
            })();
        }, []);

        const onChangeUser = (changes: User) => {
            if (data) {
                setData({ ...data, ...changes });
            }
        };
        const onSaveUser = async () => {
            const response = await axios.put(Url, { data });
            setData(response.data.data);
        };

        const onResetUser = () => {
            setData(originalData);
        };

        return (
            <Component
                {...props}
                user={data}
                onChangeUser={onChangeUser}
                onSaveUser={onSaveUser}
                onResetUser={onResetUser}
            />
        );
    };
};

export default editableDataLoader;
