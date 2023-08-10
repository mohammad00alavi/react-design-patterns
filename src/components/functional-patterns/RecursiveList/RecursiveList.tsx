type RecursiveObject<T> = {
    [key: string]: T | RecursiveObject<T>;
};

interface Props {
    data: RecursiveObject<string | number> | number | string;
}

const RecursiveList = ({ data }: Props) => {
    if (typeof data === "string" || typeof data === "number")
        return <li>{data}</li>;

    const list = Object.entries(data);

    return (
        <>
            {list.map(([key, value]) => (
                <li>
                    {key}:
                    <ul>
                        <RecursiveList data={value} />
                    </ul>
                </li>
            ))}
        </>
    );
};

export default RecursiveList;
