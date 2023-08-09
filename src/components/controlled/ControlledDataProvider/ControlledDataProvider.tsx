import React from "react";
import { Data, HandleNext, Props } from "./types";

const ControlledDataProvider = ({ onNext, currentIndex, children }: Props) => {
    const currentChild = React.Children.toArray(children)[currentIndex];
    const handleNext = (data: Data) => {
        onNext(data);
    };
    if (React.isValidElement(currentChild)) {
        return (
            <>
                {React.cloneElement(currentChild, { handleNext } as HandleNext)}
            </>
        );
    }

    return <>{currentChild || null}</>;
};

export default ControlledDataProvider;
