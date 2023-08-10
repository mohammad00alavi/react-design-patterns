import Button from "./Button";
import buttonFactory from "./buttonFactory";

const AlertButton = buttonFactory(Button, { size: "large", color: "red" });
const SuccessButton = buttonFactory(Button, { size: "small", color: "blue" });

const ButtonDemo = () => {
    return (
        <div>
            <AlertButton text="Alert!" />
            <SuccessButton text="Success!" />
        </div>
    );
};

export default ButtonDemo;
