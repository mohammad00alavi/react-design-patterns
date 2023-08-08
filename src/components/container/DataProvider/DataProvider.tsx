import React, { useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface Props {
    dataURL: string;
    dataKey: string;
    children: ReactNode;
}

const DataProvider = ({ dataURL, dataKey, children }: Props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(dataURL);
            setData(response.data);
        })();
    }, [dataURL]);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [dataKey]: data });
                }

                return child;
            })}
        </>
    );
};

export default DataProvider;
