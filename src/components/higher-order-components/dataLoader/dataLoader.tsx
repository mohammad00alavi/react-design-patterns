import axios from "axios";
import { ComponentType, useEffect, useState } from "react";

const dataLoader = <P extends object>(
    Component: ComponentType<P>,
    Url: string
) => {
    return (props: P) => {
        const [data, setData] = useState(null);
        useEffect(() => {
            (async () => {
                const response = await axios.get(Url);
                setData(response.data);
            })();
        }, []);
        return <Component {...props} user={data} />;
    };
};

export default dataLoader;
