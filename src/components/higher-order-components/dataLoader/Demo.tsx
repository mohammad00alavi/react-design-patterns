import dataLoader from "./dataLoader";
import UserInfo from "../../container/CurrentDataLoader/UserInfo";

const DataWrapper = dataLoader(UserInfo, "insert url here");

const DataLoaderDemo = () => {
    return <DataWrapper />;
};

export default DataLoaderDemo;
