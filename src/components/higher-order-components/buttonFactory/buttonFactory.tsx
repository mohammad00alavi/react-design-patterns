import { ComponentType } from "react";

const buttonFactory = <P extends object>(
    Component: ComponentType<P>,
    moreProps: P
) => {
    return (props: P) => {
        return <Component {...moreProps} {...props} />;
    };
};

export default buttonFactory;
