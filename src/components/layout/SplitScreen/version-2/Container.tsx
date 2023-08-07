import { Props } from "./Props";

const Container = ({ children }: Props) => {
    return <div className="flex">{children}</div>;
};

export default Container;
