import React, { ReactNode, useEffect, useState } from "react";

interface Props {
    getDataFunc: () => string;
    dataKey: string;
    children: ReactNode;
}

const DataProvider = ({ getDataFunc, dataKey, children }: Props) => {
    const [state, setState] = useState("");

    useEffect(() => {
        (async () => {
            const data = await getDataFunc();
            setState(data);
        })();
    }, [getDataFunc]);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [dataKey]: state });
                }

                return child;
            })}
        </>
    );
};

export default DataProvider;
