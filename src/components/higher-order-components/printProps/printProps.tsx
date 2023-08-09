import { ComponentType } from "react";

const printProps = <P extends object>(Component: ComponentType<P>) => {
    return (props: P) => {
        console.log(props);
        return <Component {...props} />;
    };
};

export default printProps;
