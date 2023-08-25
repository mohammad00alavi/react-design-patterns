import DataProvider from "./version-2/DataProvider";

interface Props {
    heading?: string;
}

const getLocalStorageData = (key: string) => () => {
    return localStorage.getItem(key) || "No data found";
};

export const Heading = ({ heading }: Props) => <h1>{heading}</h1>;

const DataProviderDemo = () => {
    return (
        <DataProvider
            getDataFunc={getLocalStorageData("heading")}
            dataKey="heading"
        >
            <Heading />
        </DataProvider>
    );
};

export default DataProviderDemo;
