import { Props } from "./Props";

const Pane = ({ children }: Props) => {
    return <div className="flex-1">{children}</div>;
};

export default Pane;
