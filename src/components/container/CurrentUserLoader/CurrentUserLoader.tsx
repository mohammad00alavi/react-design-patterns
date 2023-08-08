import React from "react";
import { User, user } from "./utils";

interface UserLoaderProps {
    children: React.ReactNode;
}
// This component may use the logic to get the user data from API and pass it through its childs.
// But here I stick with the mock data.
const CurrentUserLoader = ({ children }: UserLoaderProps) => {
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

export default CurrentUserLoader;
