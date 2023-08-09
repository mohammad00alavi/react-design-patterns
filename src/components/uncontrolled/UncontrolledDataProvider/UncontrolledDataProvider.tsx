import React, { useState } from "react";
import { Data, HandleNext, Props } from "./types";

const UncontrolledDataProvider = ({ finishHandler, children }: Props) => {
    const [allData, setAllData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = (currentData: Data) => {
        const nextIndex = currentIndex + 1;

        const updatedData = {
            ...allData,
            ...currentData,
        };
        if (nextIndex < children?.length) {
            setCurrentIndex(nextIndex);
        } else {
            finishHandler(updatedData);
        }
        setAllData(updatedData);
    };
    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return (
            <>
                {React.cloneElement(currentChild, { handleNext } as HandleNext)}
            </>
        );
    }

    return <>{currentChild || null}</>;
};

export default UncontrolledDataProvider;
