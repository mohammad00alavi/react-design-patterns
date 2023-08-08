import React from "react";
import { User, user } from "./utils";

interface CurrentDataLoaderProps {
    children: React.ReactNode;
}

const CurrentDataLoader = ({ children }: CurrentDataLoaderProps) => {
    const userData: User = user;
    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, userData as User);
                }

                return child;
            })}
        </>
    );
};

export default CurrentDataLoader;
