import CompositionButton, { CompositionButtonProps } from "./CompositionButton";

const AlertButton = (props: CompositionButtonProps) => {
    return <CompositionButton {...props} size={"large"} color={"red"} />;
};

export default AlertButton;
