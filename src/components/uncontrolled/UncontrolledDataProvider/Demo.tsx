import { useState } from "react";
import UncontrolledDataProvider from "./UncontrolledDataProvider";
import { Data } from "./types";
import Part from "./Part";

const UncontrolledDataProviderDemo = () => {
    const [message, setMessage] = useState<Data>({});
    return Object.entries(message).length < 1 ? (
        <UncontrolledDataProvider
            finishHandler={(data) => {
                setMessage(data);
            }}
        >
            <Part
                title={"First name"}
                name={"firstName"}
                placeHolder={"First name"}
                type={"text"}
            />
            <Part
                title={"Last name"}
                name={"lastName"}
                placeHolder={"Last name"}
                type={"text"}
            />
            <Part
                title={"Age"}
                name={"age"}
                placeHolder={"Age in digits"}
                type={"number"}
            />
        </UncontrolledDataProvider>
    ) : (
        <div className="bg-blue-100 p-10 rounded">
            <div className="flex flex-col gap-4">
                {Object.entries(message).map(([key, value]) => (
                    <h3 key={key} className="p-2">
                        {value["title"]}: {value["value"]}
                    </h3>
                ))}
            </div>
            <button
                onClick={() => setMessage({})}
                className="mt-4 border-2 bg-red-200"
            >
                Reset
            </button>
        </div>
    );
};

export default UncontrolledDataProviderDemo;
