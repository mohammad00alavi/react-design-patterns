import { useState } from "react";
import ControlledDataProvider from "./ControlledDataProvider";
import { Data } from "./types";
import Part from "./Part";

const ControlledDataProviderDemo = () => {
    const [allData, setAllData] = useState<Data>({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const onNext = (stepData: Data) => {
        setAllData({ ...allData, ...stepData });
        setCurrentIndex(currentIndex + 1);
    };
    return (
        <ControlledDataProvider onNext={onNext} currentIndex={currentIndex}>
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
            {allData["age"] && Number(allData["age"].value) < 18 && (
                <div className="bg-red-100 p-10 rounded">
                    <p>
                        You are not allowed to use our service, <br />
                        because you are under 18.
                    </p>
                    <button
                        onClick={() => {
                            setAllData({});
                            setCurrentIndex(0);
                        }}
                        className="mt-4 border-2 bg-blue-200"
                    >
                        Reset
                    </button>
                </div>
            )}
            {allData["age"] && Number(allData["age"].value) >= 18 && (
                <div className="bg-blue-100 p-10 rounded">
                    <div className="flex flex-col gap-4">
                        {Object.entries(allData).map(([key, value]) => (
                            <h3 key={key} className="p-2">
                                {value["title"]}: {value["value"]}
                            </h3>
                        ))}
                    </div>
                    <button
                        onClick={() => {
                            setAllData({});
                            setCurrentIndex(0);
                        }}
                        className="mt-4 border-2 bg-red-200"
                    >
                        Reset
                    </button>
                </div>
            )}
        </ControlledDataProvider>
    );
};

export default ControlledDataProviderDemo;
