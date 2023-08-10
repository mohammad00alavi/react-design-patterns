import CompositionButton, { CompositionButtonProps } from "./CompositionButton";

const SuccessButton = (props: CompositionButtonProps) => {
    return <CompositionButton {...props} size={"small"} color={"green"} />;
};

export default SuccessButton;
