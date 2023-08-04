import { ComponentType } from "react";

interface Props {
    left: ComponentType;
    right: ComponentType;
}

const SplitScreen = ({ left: Left, right: Right }: Props) => {
    return (
        <div className="flex">
            <div className="flex-1">
                <Left />
            </div>
            <div className="flex-1">
                <Right />
            </div>
        </div>
    );
};

export default SplitScreen;
