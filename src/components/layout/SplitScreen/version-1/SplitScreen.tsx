import { ReactNode } from "react";

interface Props {
    children: ReactNode[];
    leftWeight: number;
    rightWeight: number;
}

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }: Props) => {
    const [left, right] = children;
    return (
        <div className="flex">
            <div className={`flex-${leftWeight}`}>{left}</div>
            <div className={`flex-${rightWeight}`}>{right}</div>
        </div>
    );
};

export default SplitScreen;
