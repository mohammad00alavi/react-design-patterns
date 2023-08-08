import { useState } from "react";
import ControlledModal from "./ControlledModal";

const ControlledModalDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>Show Modal</button>
            <ControlledModal
                isOpen={isOpen}
                closeHandler={() => setIsOpen(false)}
            >
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, ea.
                </p>
            </ControlledModal>
        </>
    );
};

export default ControlledModalDemo;
