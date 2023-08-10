import axios from "axios";
import { ComponentType, useEffect, useState } from "react";

const captalizeString = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const resourceLoader = <P extends object>(
    Component: ComponentType<P>,
    Url: string,
    resourceName: string
) => {
    return (props: P) => {
        const [data, setData] = useState<P | null>(null);
        const [originalData, setOriginalData] = useState<P | null>(null);
        useEffect(() => {
            (async () => {
                const response = await axios.get(Url);
                setData(response.data[resourceName]);
                setOriginalData(response.data[resourceName]);
            })();
        }, []);

        const onChange = (changes: P) => {
            if (data) {
                setData({ ...data, ...changes });
            }
        };
        const onSave = async () => {
            const response = await axios.put(Url, { [resourceName]: data });
            setData(response.data[resourceName]);
        };

        const onReset = () => {
            setData(originalData);
        };

        const resourceProps = {
            [resourceName]: data,
            [`onReset${captalizeString(resourceName)}`]: onReset,
            [`onChange${captalizeString(resourceName)}`]: onChange,
            [`onSave${captalizeString(resourceName)}`]: onSave,
        };

        return <Component {...props} {...resourceProps} />;
    };
};

export default resourceLoader;
